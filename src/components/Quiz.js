import React from 'react'
import Quiz from "../../src/images/quiz2.jpg";

const Quiz = () => {
  return (
    <>
    
    <div className="parallax3 mb-3">
    
    </div>
    <br/>
    <div className="space3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item"><a href="activities.html">Activities</a></li>
      
          <li className="breadcrumb-item active" aria-current="page">Quiz</li>
        </ol>
      </nav>
      <br/></div>
      <div className="space5">
        <label className="toggle-switch">
          <input type="checkbox" onchange="toggleDarkLight()" id="darkLightToggle"/>
          <span className="slider round"></span>
        </label>
      </div>
      
    
    
    <button type="button" className="btn btn-primary fixleft"> <a href="policy.html" className="poterr">Privacy Policy</a></button>
    
    <div className="container mt-3">
        <div className="row mt-3">
            <div className="col mt-3 quizy">
                <h1 className="mt-3 mb-3">What Flower Are You?</h1>
                <p className="mt-3">Take this simple quiz to find out what flower you are. You could end up being your very favorite flower, or you may find a new favorite
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-7">
                <div className="card " style="width: 32rem;">
                    <img src={Quiz} className="card-img-top" alt="..."/>
                    <div className="card-body mt-3 quizy">
                      <h5 className="card-title mt-3 mb-3">What Flower Are You?</h5>
                      <p className="card-text mt-3">Dandelion is a humble Plant , symbolizes hope, healing, and resilience.It is derived from a french word menaing lion's teeth.  For centuries flowers have been attributed meanings so that even the deepest emotions could be conveyed silently with a single offering of these expressive blooms. 
            <br/>
                        Although this is not a scientific quiz, for some fun here at Dandelions we have done our research and come up with a few simple questions to help you find which flower best describes your personality. We hope you enjoy discovering what flower suits you!</p>
                      <button className="btn btn-primary a5">Start Below</button>
                      <p className="mt-3"> <B>FLOWER</B></p>
                    </div>
                  </div>
            </div>
        </div>
        
        <div className="col-md-2 "></div>
        <br/>
        <br/>
        <br/>
        <form id="quiz" >
            <div className="row">
    
            <div className="col-md-3"></div>
            <div className="col-md-7">
                <p><b>1: Describe your fashion style...</b></p>
            <input type="radio" name="question1" value="outdoor" required> Casual - it doesn't matter what I look like, because I know my personality will shine through.</input>
            <br/>
            <br/>
            <input type="radio" name="question1" value="indoor" required> My fashion sense is quite unique - a bit of this, a bit of that. Mostly just what I can throw together from my wardrobe.</input>
            <br/>
            <br/>
            <input type="radio" name="question2" value="introvert" required> I love vintage clothes! I like to wear skirts, dresses, blouses, scarfs... I love prints and I adore cardigans. I like to think of my fashion style as fashionable but quirky.</input>
    
            <br/>
            <br/>
            <p><b>2: The crayon I pull out of the box first:</b></p>
            <input type="radio" name="question2" value="introvert" required> Blue-I like peace and calm, and being a true blue-friend.</input>
            <br/>
            <br/>
            <input type="radio" name="question2" value="extrovert" required> Green-Earthy sages, citrusylime, and a preppy palette keep me feeling as cool as cucumber.</input>
            <br/>
            <br/>
            <input type="radio" name="question2" value="extrovert" required> Yellow-A sunny shade always brightens my mood, my rooms, and my wardrobe.</input>
            <br/>
            <br/>
            <p><b>3: When you're feeling creative, what do you do?</b></p>
            <input type="radio" name="question3" value="introvert" required> Write</input>
            <br/>
            <br/>
            <input type="radio" name="question3" value="extrovert" required> Paint</input>
            <br/>
            <br/>
            <input type="radio" name="question3" value="extrovert" required> Play Music</input>
            <br/>
            <br/>
            <p><b>4: What's your Favourite Season?</b></p>
            <input type="radio" name="question4" value="introvert" required> Summer</input>
            <br/>
            <br/>
            <input type="radio" name="question4" value="extrovert" required> Winter</input>
            <br/>
            <br/>
            <input type="radio" name="questio42" value="extrovert" required> Spring</input>
    <br/>
    <br/>
    <p><b>5:If you were to travel to a different country, where would you go?</b></p>
            <input type="radio" name="question5" value="introvert" required> Somewhere cold and snowy.</input>
            <br/>
            <br/>
            <input type="radio" name="question5" value="extrovert" required> Somewhere with a very interesting culture.</input>
            <br/>
            <br/>
            <input type="radio" name="question5" value="extrovert" required> Somewhere tropical, warm and always sunny!</input>
           
           <br/>
           <br/>
           <p><b>6:Pick one word that describes you the most.</b></p>
            <input type="radio" name="question6" value="introvert" required> Loyalty</input>
            <br/>
            <br/>
            <input type="radio" name="question6" value="extrovert" required> Modesty.</input>
            <br/>
            <br/>
            <input type="radio" name="question6" value="extrovert" required> Happy</input>
            <br/>
            <br/>
            <p><b>7:What is something people admire about you?</b></p>
            <input type="radio" name="question7" value="introvert" required> I am an honest and truthful person.</input>
            <br/>
            <br/>
            <input type="radio" name="question7" value="extrovert" required> I am a ceerful person.</input>
            <br/>
            <br/>
            <input type="radio" name="question7" value="extrovert" required> I am optimistic.</input>
            <br/>
            <br/>
            <p><b>8:A quote which sums up my outlook on life:</b></p>
            <input type="radio" name="question8" value="introvert" required> "Be pretty if you can, be witty if you must, but be gracious if it kills you."-Elsie de Wolfe</input>
            <br/>
            <br/>
            <input type="radio" name="question8" value="extrovert" required> "Winning isn't everything; it's the only thing."-Vince Lombardi</input>
            <br/>
            <br/>
            <input type="radio" name="question8" value="extrovert" required> "Say yes, and you'll figure it out afterwards."-Tina Fey </input>
            <br/>
            <button onclick="showPopupsub()" className="a5 btn btn-btn-secondary  btn-lg">Submit</button>
    
            <div id="popupsub" className="popup">
             <div className="popup-content quizy">
                <span className="close" onclick="closePopupsub()">&times;</span>
               <h5><b>Congratulations!!! <img src="images/icon34.jpg" alt=""/>
                <br/> You're a Dandelion. You're  one of us.</b></h5>
               <p className="mt-3">
              The dandelion, is a cheerful burst of sunshine often deemed a pesky weed. But look closer, and you'll find a flower overflowing with personality and fascinating traits!
                Like a ray of sunshine breaking through cracks in the pavement, the dandelion pops up in the most unexpected places.
                Step on a dandelion, and it will bounce back stronger. Mow it down, and it will return with twice the determination, that symbolizes perseverance and the unyielding spirit to overcome challenges.
                The dandelion paints landscapes with vibrant gold. It's a reminder to find simple pleasures in everyday moments and spread joy wherever we go.
                It's more than just a plant. It's a symbol of hope, resilience, and the unyielding spirit that lives within us all.
               </p>
             </div>
            </div>
            </div>
            <div className="col-md-2"></div>
        </div>
        </form>
    
    </div>
    
    <br/>
        
        </>
  )
}

export default Quiz
