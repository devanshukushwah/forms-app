# FormsApp

FormsApp is a web-based application that allows users to create, submit, and track forms. It provides functionalities such as form creation, field definition, form submission, and form response tracking, all using RESTful APIs. The application supports user authentication, and forms can be dynamically generated and managed.

## Features

- **Form Management**: Create and update forms with customizable fields.
- **Form Submission**: Allows users to submit forms.
- **Form Responses**: Fetch responses for a specific form.
- **Authentication**: Secured endpoints using JWT (JSON Web Token) authentication.
- **Unique Form ID Generation**: Automatically generates unique form IDs using date-based patterns.
- **Form Field Customization**: Ability to create different types of fields (text, radio, checkbox, etc.) and configure attributes.

## Technologies Used

- **Backend**: Java, Spring Boot
- **Database**: Relational Database (Hibernate + JPA)
- **Authentication**: OAuth2, JWT (JSON Web Token)
- **API Documentation**: Swagger (or OpenAPI)
- **Testing**: JUnit, Mockito
- **Logging**: SLF4J with Logback

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/formsapp.git
   cd formsapp
   ```

1.  Make sure you have Java 11+ and Maven installed on your system.bashCopy codejava -versionmvn -version
    
2.  Run the following command to build the application:bashCopy codemvn clean install
    
3.  You can run the application locally using Maven:bashCopy codemvn spring-boot:runThe application will be available at http://localhost:9080/.
    
4.  Ensure that your database is configured correctly in the application.properties or application.yml file. You can modify it to match your database settings (e.g., MySQL, PostgreSQL).
    

API Documentation
-----------------

You can access the Swagger-based API documentation after starting the application:

*   **Base URL**: http://localhost:9080/
    
*   **Swagger UI**: http://localhost:9080/swagger-ui.html
    

Authentication
--------------

The application uses JWT-based authentication. You will need to login first to get the JWT token.

### Login Example:

**POST /login**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   jsonCopy code{    "username": "yourusername",    "password": "yourpassword"  }   `

The response will include a JWT token, which you can use for subsequent API calls.

### Example Request to Create a Form:

**POST /forms**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   jsonCopy code{    "title": "Sample Form",    "description": "A sample form to collect data"  }   `

### Example Request to Submit a Form:

**POST /forms/{formId}/submit**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   jsonCopy code{    "email": "user@example.com",    "answers": [      {        "fieldId": 1,        "value": "Sample answer"      }    ]  }   `

Testing
-------

To run the tests for the project, use the following command:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopy codemvn test   `

Contributing
------------

Contributions are welcome! If you find a bug or want to add a new feature, feel free to fork the repository and submit a pull request.

License
-------

This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
----------------

*   [Spring Boot](https://spring.io/projects/spring-boot) for building the application.
    
*   [JWT](https://jwt.io/) for user authentication.
    
*   [Hibernate](https://hibernate.org/) for ORM (Object-Relational Mapping).