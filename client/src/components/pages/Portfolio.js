import React from 'react';
import Card from './Card'

export default function Portfolio() {
    return (
<div className="card notification is-black is-size-6-mobile">

            <div className="card-content notification is-black">
            <p className="title is-4 is-size-6-mobile">
                            Portfolio
                        </p>


    
            </div>
    <div className="columns">

    <div className="column">
<div className="card notification is-white">
  <div className="card-image">
    <figure className="image is-4by3">
    <a href="https://sthompsonchicago.github.io/pandemic-simulator/">
    <img src="https://sthompsonchicago.github.io/My_portfolio/assets/simulation.png" alt="Simulation image"/>
    </a>
    </figure>
  </div>


<div className="column">
    <div className="content">
    <p className="title is-4 is-size-6-mobile">Epidemic Simulator</p>
    <p>This is is a React application that allows the user to view an animation of an epidemic. The user can input a variety of different parameters and see how the results change. 
    </p>
    <ul>

                                    <li><a href="https://sthompsonchicago.github.io/pandemic-simulator/">Link to deployed application.</a></li>

                                    <li><a href="https://github.com/SThompsonChicago/pandemic-simulator">Link to GitHub repository.</a> </li>
            
                                  </ul>
      <br/>
    </div>
  </div>
</div>


</div>






        <div className="column">
<div className="card notification is-white">
  <div className="card-image">
    <figure className="image is-4by3">
    <a href="https://book-club-chicago.herokuapp.com">
      <img src="https://sthompsonchicago.github.io/My_portfolio/assets/bookTalkPic.png" alt="Image of Book Talk app"/>
    </a>
    </figure>
  </div>


<div className="column">
    <div className="content">
    <p className="title is-4 is-size-6-mobile">Book Talk</p>
    <p>This is a full stack web application that allows users upload and share book 
                              reviews with friends online. 
                              The aim is to make reading a more interactive and social experience.  
    </p>
    <ul>

                                  <li><a href="https://book-club-chicago.herokuapp.com">Link to deployed application.</a></li>

                                  <li><a href="https://github.com/SThompsonChicago/book-club">Link to GitHub repository.</a> </li>
          
                                </ul>
      <br/>
    </div>
  </div>
</div>


</div>



</div>


<div className="columns">



<div className="column">
<div className="card notification is-white">
  <div className="card-image">
    <figure className="image is-4by3">
    <a href="https://sthompsonchicago.github.io/Nonprofit-Career-Planner/">
      <img src="https://sthompsonchicago.github.io/My_portfolio/assets/nonprofitPlanner.png" alt="Image of Nonprofit App"/>
    </a>
    </figure>
  </div>


<div className="column">
    <div className="content">
    <p className="title is-4 is-size-6-mobile">Career Planner</p>
    <p>This web application helps the user plan a career in the nonprofit industry by looking up a list of nonprofits (and other relevant information) for a chosen city.
    </p>
    <ul>

                                    <li><a href="https://sthompsonchicago.github.io/Nonprofit-Career-Planner/">Link to deployed application.</a></li>

                                    <li><a href="https://github.com/SThompsonChicago/Nonprofit-Career-Planner">Link to GitHub repository.</a> </li>
            
                                  </ul>
      <br/>
    </div>
  </div>
</div>


</div>










<div className="column">
<div className="card notification is-white">
  <div className="card-image">
    <figure className="image is-4by3">
    <a href="https://still-refuge-81895.herokuapp.com/">
      <img src="https://sthompsonchicago.github.io/My_portfolio/assets/appimage.png" alt="Image of blog app"/>
    </a>
    </figure>
  </div>


<div className="column">
    <div className="content">
    <p className="title is-4 is-size-6-mobile">Blog</p>
    <p>This is a simple blog that allows a user to create an account, write blog posts and view posts by others. It is a full-stack application using Express, Handlebars, MySQL, node and more.
    </p>
    <ul>
  
                                <li><a href="https://still-refuge-81895.herokuapp.com/">Link to deployed application.</a></li>

                                <li><a href="https://github.com/SThompsonChicago/tech-blog">Link to GitHub repository.</a> </li>
        
                              </ul>
      <br/>
    </div>
  </div>
</div>


</div>



</div>


</div>

    );
}