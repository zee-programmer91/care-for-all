# Care For All
# create a virtul environment
python -m venv virtualenv 
or 
python3 -m venv virtualenv # ubuntu
#  Install python3-venv
sudo apt install python-venv 
or 
sudo apt install python3-venv # ubuntu
# Activate virtual envriment
source virtualenv/bin/activate
 # activate the enviroment
pip install -r requirements.txt

## NB: MAKE SURE YOUR VIRTUAL ENVIRONMENT IS ACTIVE AT ALL TIME BEFORE RUNNING THE BELOW

## First Time Run (Installing dependencies)

### (1) Back-End
8
pip install django

## (2) Run Front-End

npm install -g expo-cli

## Run Back-End

cd backend(where theres the manage.py)
python manage.py makemigrations
python manage.py migrate
python manage.py runserver

## Run Front-End

cd front-end
expo start
