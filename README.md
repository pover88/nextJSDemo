# Docker Container Creation----------------

* docker build . -t my-next-js-app
* docker run -p 3000:3000 my-next-js-app
* docker run -p 80:3000 my-next-js-app

# docker image tagging
* docker tag my-next-js-app 523043106285.dkr.ecr.eu-central-1.amazonaws.com/nextsj-repository

# ECR Login via AWS CLI-------------
* aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 523043106285.dkr.ecr.eu-central-1.amazonaws.com

# docker push
* docker push 523043106285.dkr.ecr.eu-central-1.amazonaws.com/nextsj-repository

