# Own Up Rate Quote Coding Challenge

Coding challenge for Own Up Junior Software Engineer position. The prompt is to build a UI to shop rate quotes from an API Own Up has created to simulate getting rate quotes from their lender network.

The requirements are to build a webpage using React that allows the user to enter loan information and then displays rate quotes from Own Up's API. A mockup and a [Swagger](!https://editor.swagger.io/) schema were provided by Own Up with the prompt.

## Tech Used

* JavaScript
* HTML5
* CSS3
* [React](https://reactjs.org/)
* [React-Bootstrap](https://react-bootstrap.github.io/)
* [FontAwesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome) - Used to generate phone icon in header

## Screenshots

![rate quotes page](https://i.imgur.com/sr6oUyk.png "rate quotes page")

## Installation and Use

1. Fork and Clone this repository.
2. Install dependencies with ```npm install```.
3. Run the development server from terminal with ```npm run start```.
4. To use the app, fill out the 4 information fields and click the Quote Rates button.
  - If the criteria provided matches with rate quotes from the API, a table will render with all available rate quotes.
  - If the criteria provided does not match with any quotes from the API, a message will appear letting you konw that there are no matching rates.
  - If an error occurs with the HTTP request to the API, a message will appear letting you know there has been a problem with the request.

## Tests

This React app uses Jest to run tests. To run tests:

1. Navigate to the project's root directory in the terminal.
2. Enter ```npm run test```.

### Details

```renders without crashing``` tests that the App component renders (built into Create-React-App).

```formats interest rate``` tests that interest rates pulled from the API are formatted correctly with a % following the rate.

```formats dollars``` tests that dollar amounts pulled from the API are formatted correctly with a dollar sign, commas where applicable, and decimal points limited to 2 (and rounded correctly).

```formats APR``` tests that APRs pulled from the API are formatted correctly with a % following the rate and demimal point limited to 2 (and rounded correctly).

## Planning

### User Stories

<details><summary>Click to expand User Stories</summary>


1. As a user, I want to enter my loan information (loan size, credit score, property type, and occupancy) into a form, with Loan Size field as a number in dollars, Credit Score field as an integer between 300 and 800, and Property Type and Occupancy fields as dropdown select lists.

2. As a user, I want to click a ‘Quote Rates’ button and receive a list of applicable lending options based on my loan info inputs.

3. As a user, I want to receive a notification if any of the required fields have been left blank when I click the ‘Quote Rates’ button.

4. As a user, when I submit my loan info and am waiting for results, I want to see indication on the screen that my request is loading so that I know the request is processing correctly.

5. As a user, I want to receive a notification if something went wrong with my Rate Quote request.
</details>

## Schedule

<details><summary>You can find my project schedule here (dropdown)</summary>

#### Wednesday, 6/19

- Read through Helpful Links and attachments provided by Own Up
  - Swagger Editor
  - Fetch API MDN
  - Clean PR History
  - Create React App
- Set up GH repo
- Use curl scripts to access API/test endpoints
- Set up local React repo (Create React App)

#### Thursday, 6/20

- Page layout (components)
  - Loan info form
    - Field: loanSize (number)
    - Field: creditScore (integer min 300 max 800)
    - Field: propertyType (string)
      - SingleFamily
      - Condo
      - Townhouse
      - MultiFamily
    - Field: Occupancy (string)
      - Primary
      - Secondary
      - Investment
    - Quote Rates button (submit)
  - Rate Quotes Table
    - lenderName
    - interestRate
    - closingCosts
    - monthlyPayment
    - Apr
  - Header (Own Up branding)
  - Footer (Own Up branding)
- Set up api connection with fetch
- Add search criteria to state rather than hard coding into request URL
- Fetch on Quote Rates button click/form submit rather than on page load
- Handle user messaging for loading and failed request
- Handle user messaging for no matches based on submitted loan info

#### Friday, 6/21

- Unit tests/automated tests (review and plan)
  - Write a test for Interest Rate format (need % on end of number)
  - Write a test for money format (need $ in front and comma in front of 3 zeros)
  - Write a test for APR format (need to limit decimal places to 3)
- Styling
  - Font
  - Colors
  - Table layout
  - Form layout
  - Table contents (after tests above are working)
- Troubleshooting/debugging/test on different machines
- README
</details>

## Future Thinking

Future iterations of this app should be mobile compatible, and should include help icons for users to click and read about the different terms on the page (credit score, property types, etc.). I should also store the API key in an environment variable rather than hardcoding it into fetch header.

## Author

* [K Strickland](https://github.com/kstrickland0612)
