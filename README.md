# care-for-all
python -m venv env #create a virtul environment
env\Scripts\activate # activate the enviroment
# NB MAKE SURE YOUR VIRTUAL ENVIRONMENT IS ACTIVE AT ALL TIME  

# if first time
# Back-End
pip install django

# To run the Back-end
cd backend(where theres the manage.py)
python manage.py makemigrations
python manage.py migrate
python manage.py runserver


# Front-End
npm install -g expo-cli

# To run the Front-end
cd front-end
expo start
