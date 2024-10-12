<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
<br />
<div align="center">
  <a href="https://github.com/pedrohenrique11/Ares">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Ares</h3>

  <p align="center">
    A platform to help you facilitate your workouts, automate your load progression and organize your workouts!
    <br />
    <a href="https://github.com/pedrohenrique11/Ares"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/pedrohenrique11/Ares">View Demo</a>
    ·
    <a href="https://github.com/pedrohenrique11/Ares/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/pedrohenrique11/Ares/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
About The Project
![Ares Screen Shot][product-screenshot]

Ares was born out of the need to address the challenges many people face, whether they’ve been training for years or are just starting. The complexities of load progression, workout periodization, and overall training organization can be overwhelming, making it difficult to stay consistent and improve efficiently.

Here's why Ares is different:

* Ares automates the process of calculating periodization and load progression based on your training data, saving you time and effort.
* Instead of manually planning and adjusting your workouts, you simply register your sets, reps, and weights, and Ares takes care of the rest.
* The app will also integrate with AI in the future to generate personalized training plans, ensuring your workouts are always optimized for your goals.
* Whether you're a seasoned athlete or a beginner, Ares simplifies your fitness journey by handling the complexities, allowing you to focus on what matters—getting stronger and improving over time.

Of course, fitness needs vary, so we’ll be continually improving Ares. You can also contribute by forking the repo and submitting your own enhancements or bug fixes. Thanks to everyone who has helped shape the development of this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Next][Next.js]][Next-url]
* [![Vue][Vue.js]][Vue-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
* Docker

### Installation API

1. Clone the repo
   ```sh
   git clone https://github.com/pedrohenrique11/ares.git
   ```
2. Navigate to the API directory:
   ```sh
   cd api
   ``
3. Set up the environment variables: Create a .env file in the root directory and add your environment variables (e.g., database credentials, JWT secrets):
   ```sh
   DATABASE_URL=your_database_url
   JWT_SECRET=your_secret_key
   ```
4. Run docker containne:
   ```sh
   Docker compose up
   ```
5. Run database migrations using Prisma:
   ```sh
   npx prisma migrate dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

### API
- [x] Docker container
- [ ] Install dependences
- [ ] User can:
    - [ ] Create account
    - [ ] 

See the [open issues](https://github.com/pedrohenrique11/Ares/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top contributors:

<a href="https://github.com/pedrohenrique11/Ares/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=pedrohenrique11/Ares" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Pedro Henrique - pedrohenriqueb.dev@gmail.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/pedrohenrique11/Ares)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/pedrohenrique11/Ares.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/pedrohenrique11/Ares.svg?style=for-the-badge
[forks-url]: https://github.com/pedrohenrique11/Ares/network/members
[stars-shield]: https://img.shields.io/github/stars/pedrohenrique11/Ares.svg?style=for-the-badge
[stars-url]: https://github.com/pedrohenrique11/Ares/stargazers
[issues-shield]: https://img.shields.io/github/issues/pedrohenrique11/Ares.svg?style=for-the-badge
[issues-url]: https://github.com/pedrohenrique11/Ares/issues
[license-shield]: https://img.shields.io/github/license/pedrohenrique11/Ares.svg?style=for-the-badge
[license-url]: https://github.com/pedrohenrique11/Ares/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/pedrohenrique11
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
