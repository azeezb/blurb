# Blurb – A Social Media E-Reader.

Building a small Goodreads-esque program, with a focus on reviews and public opinion.

## Aim

**Intended to gain and display proficiency in React as a frontend and C#/MySQL as a backend.**

## Proposed Features

- User scans an ISBN or a barcode, book is recognised.
- Sent to Google Books API for metadata on the book 
  - Title, author, small summary, other books in series

- Start scanning and isolating ISBNs.
- Start putting them through to Google Books API
- Scrape data and place in class form (figure out classes in Python) 
- Post new rating system – A+, B, C, D, E, F, based on a combination of: 
    - Stars 
    - Twitter sentiment analysis and embed 2-3 'safe' tweets on the page regarding the book.
- Allow for EPUB/PDF reading in-app.
- **Allow quote sharing to twitter.**
- **Allow quote creation similar to Rap.Genius app.**
- Themes, dark mode.
- Have three tabs  – My Books, Social, E-Reader .
- Import a list of books from the notes app 


## Intended Code Quality Goals

1. **Clean and modular code:** Keep functions and components modular, reusable, and focused on a single responsibility.
1. **Scalability and performance optimization**: Design  application with scalability in mind. Use efficient algorithms; optimize API calls.
1. **Responsive and user-friendly design**
1. **Error handling and debugging:** Implement effective error handling mechanisms throughout application. Display clear error messages.
1. **Testing and quality assurance:** Write unit tests, integration tests, and end-to-end tests to ensure the reliability and stability of your application. **Use tools like Jest, Enzyme, or React Testing Library for React components, and NUnit or xUnit for C# backend testing.**
1. **Security considerations:** Use encryption for sensitive data, implement secure authentication and authorization mechanisms, and sanitize user input to prevent common vulnerabilities like SQL injection or cross-site scripting (XSS).
1. **Documentation: Provide clear and concise documentation for your code, APIs, and any external libraries or components you use.** 
1. **Version control:** Use a version control system like Git to manage your codebase. Keep your commits well-organized, with clear commit messages. **Use branching and merging effectively to collaborate with others and demonstrate your ability to work on a team.**
1. **Continuous integration and deployment (CI/CD): Set up a CI/CD pipeline to automate the build, testing, and deployment processes. This shows your familiarity with modern development practices and makes it easier for employers to evaluate your work.**


## Proposed Project Structure

### Backend (C#, MySQL)


1. **Database:** User data, ratings, reviews, and any other relevant information. Selected database is MySQL.
1. **API**: Build logical, well-formed APIs that allow the frontend to communicate with the server and perform operations i.e. Retrieving book information, adding new books, updating book details, and deleting books.
1. **Authentication and Authorization**: Create a admin/user dichotomy with the best security practices for logging in. 
1. **Business Logic: Possibly the most intensive aspect.** Validating user input, performing book searches, applying filters and sorting options, calculating book statistics, and managing user interactions like ratings and reviews.
1. **Data Processing and Storage:** Additional data processing tasks - performing calculations, generating reports, handling file uploads for book covers etc.

1. **Integration with External APIs**: Retrieving book details from external book databases (Google Books API, LibraryThing), fetching book recommendations, integrating with payment gateways for buying them.

1. **Security and Validation**


### Frontend (React)

1. **User Interface (UI)**: User-friendly, responsive, and optimized for different screen sizes.
1. **React Components**: Learn the right methods for compartmentalising different Recat components and reusing them throughout the app.
1. **State Management**
1. **API Integration**: Learn to use libraries like Axios or the built-in Fetch API to make HTTP requests from the frontend to the backend APIs. Use the responses received from the backend to update the UI.
1. **Forms and Validation**: Things like search queries/user reviews.
1. **User Interactions**: Searching, sorting, filtering, rating books, adding reviews, and managing personal book lists.
1. **Responsive Design**: Explained as CSS media queries and flexbox/grid layouts - they ensure the webapp adapts to various devices.

### Links

####  LibraryThing
- https://www.librarything.com/services/

