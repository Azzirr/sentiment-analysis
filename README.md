# Sentiment Analysis

An application for text sentiment analysis using the Hugging Face model.

## How to Run?

1. Clone the repository using command line:
   ```sh
   git clone https://github.com/Azzirr/sentiment-analysis.git
   ```
2. Navigate to the project folder:
   ```sh
   cd sentiment-analysis
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create .env file and add your API key (without this key, request will not work):
   ```sh
   VITE_HUGGINGFACE_API_KEY=your_api_key
   ```
5. Start the application:
   ```sh
   npm run dev
   ```

## Tests

To run tests use:

```sh
npm test
```

## Technologies

This project is built using:

#### React 19 – a modern framework for building user interfaces.

#### TypeScript – a superset of JavaScript that provides static typing.

#### Vite – a fast front-end build tool.

#### Jest - a JavaScript testing framework.

#### Prettier – a code formatting tool.

#### ESLint – a linter to detect errors in the code.

#### Husky – a tool for automating Git tasks (e.g., running linters before commits).

## Challenges

### 1. Choosing the API communication method

Several approaches were considered for making requests to the Hugging Face API:

- GraphQL,
- Fetch API,
- Axios,
- A dedicated Hugging Face library ([documentation](https://huggingface.co/docs/inference-endpoints/guides/test_endpoint)).
- Ultimately, fetch() was chosen because the application only makes a single request, making additional libraries unnecessary overhead.

### 2. Application structure and component reusability

A key decision was whether the project should be designed for easy scalability. In the end, reusable components like Button, Modal, and TextArea were created. These:

- include only essential functionality for the current state,
- are easy to extend in the future,
- have their own CSS files, avoiding redundant styling in different places.

This makes the codebase cleaner, more modular, and easier to maintain.

### 3. UI Design Without Prebuilt Component Libraries

Another challenge was designing UI components from scratch since no prebuilt libraries like Shadcn, Material UI, or Chakra UI were used. This required a forward-thinking approach to ensure that the components would be flexible and scalable while still being visually consistent and maintainable.
