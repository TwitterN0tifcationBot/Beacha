from flask import Blueprint, render_template, request, redirect, url_for, flash
from app.utils.customization import update_user_preferences
from app.models.user import User

settings_bp = Blueprint('settings', __name__)

@settings_bp.route('/settings', methods=['GET', 'POST'])
def settings():
    user = User.get_current_user()  # Assuming a method to get the current user
    if request.method == 'POST':
        theme = request.form.get('theme')
        server_icon = request.form.get('server_icon')
        text_font = request.form.get('text_font')
        color = request.form.get('color')
        
        if update_user_preferences(user.id, theme, server_icon, text_font, color):
            flash('Settings updated successfully!', 'success')
            return redirect(url_for('settings.settings'))
        else:
            flash('Failed to update settings. Please try again.', 'error')
    
    return render_template('settings.html', user=user)