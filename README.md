# IBM Client Engineering Solutions Hub Template

## What is this?

This is a template used to quickly and effectively document assets and solutions created by Client Engineers at IBM. The template outlines the bare minimum requirements that must be documented when publishing your work. This template was created using the `gatsby-theme-carbon` package, [click here](https://gatsby-theme-carbon.vercel.app/) to learn more.

## How do I use it?

1. Use this template to create a new repository in the ibm-client-engineering Open Solutions Library.

   Make sure you follow the naming convention: solution-[insert-solution-name].

2. Clone your new repository to your local machine.

3. Make initial changes to `gatsby-config.js`.

   Open the `gatsby-config.js` file in a code editor and update the following according to the naming convention:
   
   - `pathPrefix`
   - `start_url`
   - `base-url`

   Update the `siteMetadata` fields and the `name` fields with the name of your solution which will be populated across the website.

5. Start developing by running the site locally.

   Navigate into your directory with `cd solution-<solution name>`.

   Install the Gatsby CLI with `brew install gatsby-cli` or `npm install -g gatsby-cli`

   Run `yarn install` to get everything set up.
    
   Run the site locally with `yarn dev:clean`.

   For more useful scripts, [click here](https://gatsby-theme-carbon.vercel.app/guides/npm-scripts).

6. Make changes and begin documenting your solution.

   The `pages` folder under `src` has all of the .mdx files for the pages you see on the site. Start by filling out those pages with the necessary documentation.

   Make sure you update the `description` and `date` fields on the .mdx files as you document. This is important for the search capability on the site.

   [Click here](https://gatsby-theme-carbon.vercel.app/components/Accordion) to see the various components you can use in the .mdx files.

7. OPTIONAL: Adding/Removing/Changing any pages in the template.

   The `nav-items.yaml` file under the `data` folder lists the order of the pages that are shown in the left navigation.

   If you add, remove, or change the name of a file, you must update the `nav-items.yaml` file accordingly.

   [Click here](https://gatsby-theme-carbon.vercel.app/guides/navigation/sidebar) to learn more about navigation or adding tabs to a page.
