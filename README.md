# HERE Maps Boilerplate with Next.js

This project is a simple setup for integrating HERE Maps into a Next.js application.

## Steps to Set Up the Project

Follow these steps to create and configure your Next.js project with HERE Maps.

### 1. Create a New Next.js Project

- Run `npx create-next-app@latest projectName` in your terminal.
- When prompted, select "Yes" to use the `src` folder.

### 2. Clean Up Unnecessary Files

- Remove the default content from `src/pages/index.js`.
- Delete any unused CSS files, like `src/styles/Home.module.css` and other default styles.

### 3. Set Up the Project Structure

- Inside the `src` folder, create a new folder named `components`.
- In the `components` folder, create a file named `Map.js`.

### 4. Write the Map Component

- Implement the `Map.js` file to initialize and render the HERE Map.
- Make sure to follow the HERE Maps documentation for proper configuration.

### 5. Import and Use the Map Component

- Open `src/pages/index.js`.
- Import and use the `Map` component in the main page component.

### 6. Add HERE Maps API Scripts

- Open `src/pages/_document.js`.
- Add the necessary HERE Maps API scripts inside the `<Head>` section.

### 7. Get Your HERE API Key

- Visit the [HERE Developer Portal](https://developer.here.com) to sign up and get your API key.
- Replace the placeholder API key in your code with the one you obtained from the portal.

### 8. Customize the Map

- Adjust the map settings (like zoom level and coordinates) as needed.
- Refer to the [HERE Maps API Documentation](https://developer.here.com/documentation) for customization options.

## Useful Links

- [HERE Developer Portal](https://developer.here.com) - Sign up and get your API key.
- [HERE Maps API Documentation](https://developer.here.com/documentation) - Detailed documentation for the HERE Maps API.

---

This `README.md` provides a clear set of steps for setting up and understanding the project. Feel free to customize and expand on it as needed!
