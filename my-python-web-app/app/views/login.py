from flask import Blueprint, render_template, request, redirect, url_for, flash
from app.models.user import User

login_bp = Blueprint('login', __name__)

@login_bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User.authenticate(username, password)
        
        if user:
            # Logic for successful login (e.g., session management)
            flash('Login successful!', 'success')
            return redirect(url_for('home.home'))
        else:
            flash('Invalid username or password', 'danger')
    
    return render_template('login.html')