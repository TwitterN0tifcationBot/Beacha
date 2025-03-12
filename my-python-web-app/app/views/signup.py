from flask import Blueprint, render_template, request, redirect, url_for, flash
from app.models.user import User

signup_bp = Blueprint('signup', __name__)

@signup_bp.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']
        
        if User.create(username=username, password=password, email=email):
            flash('Signup successful! Please log in.', 'success')
            return redirect(url_for('login.login'))
        else:
            flash('Signup failed. Please try again.', 'danger')
    
    return render_template('signup.html')