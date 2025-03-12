# My Python Web App

This is a simple web application built using Flask, designed to provide user authentication and customization features. The application includes pages for Signup, Login, Home, and Settings, allowing users to manage their accounts and personalize their experience.

## Project Structure

```
my-python-web-app
├── app
│   ├── __init__.py
│   ├── main.py
│   ├── templates
│   │   ├── base.html
│   │   ├── home.html
│   │   ├── login.html
│   │   ├── signup.html
│   │   └── settings.html
│   ├── static
│   │   ├── css
│   │   │   └── styles.css
│   │   └── js
│   │       └── scripts.js
│   ├── views
│   │   ├── home.py
│   │   ├── login.py
│   │   ├── signup.py
│   │   └── settings.py
│   ├── models
│   │   └── user.py
│   └── utils
│       ├── server_management.py
│       └── customization.py
├── requirements.txt
└── README.md
```

## Features

- **User Authentication**: Users can sign up and log in to their accounts.
- **Home Page**: Displays user friends, servers, and an option to create a Beacha server.
- **Settings Page**: Allows users to customize their theme, server icons, text font, color, and user information.
- **Server Management**: Utility functions for creating and modifying server settings.
- **User Customization**: Functions for changing themes and icons.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-python-web-app
   ```

2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Run the application:
   ```
   python app/main.py
   ```

## Usage

- Navigate to `http://localhost:5000` in your web browser to access the application.
- Use the Signup page to create a new account or the Login page to access your existing account.
- Once logged in, you can manage your settings and view your home page.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.