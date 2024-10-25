# Care For All

python -m venv env #create a virtul environment
env\Scripts\activate # activate the enviroment
pip install -r requirements.txt

## NB: MAKE SURE YOUR VIRTUAL ENVIRONMENT IS ACTIVE AT ALL TIME BEFORE RUNNING THE BELOW

## First Time Run (Installing dependencies)

### (1) Back-End

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
npm run web
