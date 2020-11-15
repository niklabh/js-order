import 'semantic-ui-css/semantic.min.css';
import './fonts.css';

import { createGlobalStyle } from 'styled-components';

export const Style = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
        font-family: 'Roboto', 'Segoe UI', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: grey_app_background;
        color: black_text;
    }

    pre {
        display: inline-block;
        max-width: 100%;
        white-space: pre-wrap;
        background-color: grey_light;
    }

    ul {
        padding: 0;
    }

    p {
        a {
            color: pink_primary;
            &:hover {
                color: pink_secondary;
            }
        }
    }

    a:hover {
        text-decoration: none;
    }

    .container-fluid {
        max-width: 1200px;
        padding: 0 2.5rem 0 2.5rem;
        margin: 3.75rem auto 0 auto;

		@media (max-width: 1299px) {
			padding: 0 2.5rem 0 2.5rem;
		}
    }
    }

    #page-container {
        position: relative;
        min-height: 100vh;
    }

    .ui.container {
        margin: 4rem auto 0 auto;
        padding-bottom: 8rem;

        @media only screen and (max-width: 1299px) and (min-width: 992px) {
            width: calc(100% - 6rem);
        }

        @media only screen and (min-width: 1299px) {
            width: 1238px;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        color: #2E2F30;
        font-family: Roboto;
        line-height: 100%;
        margin-top: 0;
    }

    h1, h2, h3 {
        font-weight: 400;
        font-size: 3rem;
    }

    h3 {
        font-weight: 400;
    }

    h4, h5, h6 {
        font-weight: 500;
    }

    h1 {
        margin-bottom: 3rem;
    }

    h2 {
        margin-bottom: 1.2rem;
    }

    h3, h4 {
        font-size: 1.8rem;
        margin-bottom: 1.2rem;
    }

    h5, h6 {
        font-size: 1.5rem;
        margin-bottom: 0.4rem;
    }

    strong {
        font-weight: 500;
    }

    ::selection {
        background-color: #2E2F30;
        color: white;
    }

    .ui.dropdown .menu, .ui.dropdown .menu>.item {
        font-size: 1.3rem;
    }

    @media only screen and (max-width: 768px) {
        .container-fluid {
        margin: 2.5rem auto 0 auto;
        padding: 0 1.25rem 0 1.25rem;
        }

        .ui.container, .ui.grid>.column:not(.row) {
            padding-left: 0;
            padding-right: 0;
        }
    }

    @media only screen and (max-width: 576px) {
        .container-fluid {
        	padding:0;
        }

        .ui.grid, .ui.container {
            margin-top: 0rem!important;
            margin-left: 0!important;
            margin-right: 0!important;
        }

        h3 {
            font-size: 2.1rem;
        }
    }
`;
