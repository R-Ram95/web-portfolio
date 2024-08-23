terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.67.0"
    }
  }

  // COMMENT OUT WHEN BOOTSTRAPPING
  backend "s3" {
    bucket         = "web-portfolio-tf-state"
    key            = "terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "web-portfolio-tf-lock"
    encrypt        = true
    profile        = "default"
  }
}

module "web-portfolio-static-web" {
  source           = "git::https://github.com/R-Ram95/terraform-modules//aws_static_web"
  project_name     = "web-portfolio"
  bucket_name      = "web-portfolio-rram-bucket"
  cf_dist_name     = "web-portfolio-cf"
  root_domain_name = var.domain_name
  path_to_bundle   = "../dist"
}

// UNCOMMENT WHEN BOOTSTRAPPING
module "terraform-be" {
  source               = "git::https://github.com/R-Ram95/terraform-modules//aws_terraform_be"
  region               = "us-east-1"
  aws_profile          = "default"
  bucket_name          = "web-portfolio-tf-state"
  project_name         = "web-portfolio"
  enable_state_locking = true
  dynamodb_name        = "web-portfolio-tf-lock"
}
