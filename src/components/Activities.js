import React from 'react'
import Active from "../../src/images/prf.jpg";
import Active1 from "../../src/images/bee hotel.jpg";
import Active2 from "../../src/images/bag.jpg";
import Active3 from "../../src/images/garden diary.jpg";
import Active4 from "../../src/images/kite.jpg";
import Active5 from "../../src/images/cake.jpg";
import Active6 from "../../src/images/pencil.jpg";
import Active7 from "../../src/images/conkers.jpg";
import Active8 from "../../src/images/crown.jpg";
import Active9 from "../../src/images/animal.jpg";
import Actives from "../../src/images/trail.jpg";
import Actives1 from "../../src/images/trays.jpg";
import Actives2 from "../../src/images/crop pr.jpg";
import Actives3 from "../../src/images/stick.jpg";
import Actives4 from "../../src/images/card.jpg";
import Actives5 from "../../src/images/bm.jpg";
import Actives6 from "../../src/images/bm1.jpg";
import Actives7 from "../../src/images/mark.jpg";
import Actives8 from "../../src/images/book.jpg";
import Actives9 from "../../src/images/mark2.jpg";
import Activ from "../../src/images/mark3.jpg";
import Activ1 from "../../src/images/scav.jpg";
import Activ2 from "../../src/images/dandelion plant.jpg";
import Activ3 from "../../src/images/air.jpg";
import Activ4 from "../../src/images/banana.jpg";
import Activ5 from "../../src/images/bromelia.jpg";
import Activ6 from "../../src/images/palm.jpg";
import Activ7 from "../../src/images/orchid.jpg";

const activities = () => {
  return (
    <>
    <div className="paralacti">
          
          </div>
          <div className="space3">
            <br/>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          
              <li className="breadcrumb-item active" aria-current="page">Activities</li>
            </ol>
          </nav>
          <br/>
          </div>
          <div className="space5"><label className="toggle-switch">
            <input type="checkbox" onchange="toggleDarkLight()" id="darkLightToggle"/>
            <span className="slider round"></span>
          </label></div>
          
          <button type="button" className="btn btn-primary fixleft"> <a href="policy.html" className="poterr">Privacy Policy</a></button>
  
  <div className="container">
    <div className="row">
      <div className="col centeraa mt-3">
        <br/>
        <h2 className="oft">  Explore the World of Plants at Home </h2>
        <br/>
        <p>Learning about nature doesn’t have to end when you leave the Garden! <br/>We’ve created these activities and games below to keep your family engaged with the world of plants.
        </p>
      </div>
    </div>
  <div className="row tall"> 
    <div className="col-md-4 mt-2 tall">
      <div className="card shawl2">
        <img src={Active} className="card-img-top" alt="..."/>
        <div className="card-body">
          
          <h5 className="card-title"><b>Presed Flowers Frame</b></h5>
          <p className="card-text">The garden is looking colourful at this time of the year, so take a bag and collect some fallen petals and flowers to  make into a beautiful frame.</p>
          <button onclick="showPopup5()" className="a2">Find How</button>
  
            <div id="popup5" className="popup">
             <div className="popup-content">
                <span className="close" onclick="closePopup5()">&times;</span>
                <h5><b>Presed Flowers Frame</b></h5>
                <img src={Active} alt="Image" className="image-fluid w-100"/>
                <p><b>What you'll need</b>
                  Collecting bag,Petals, flowers and leaves from the garden, Newspapers, Heavy books, A4 sheet of paper, Thick card, Pencil and ruler, Scissors, Paint and brushes, PVA glue,
              </p>
              <p><b>What to do</b>
              <ol>
                  <li>
                      Take a bag and collect petals, flowers and leaves that have fallen to the ground in your garden. It's best to do this on a dry day. Remember to check with a grown up first, and wash your hands when you have finished.
                  </li>
                  <li>Open out some sheets of newspaper and, on one side, spread the petals and leaves out so that they're not touching each other. Close the other side of paper over the top and place it somewhere flat with some heavy books on top.</li>
                  <li>After one week, check the petals and see if they are flat and ready to use.</li>
                  <li>Take the A4 sheet of paper and draw round the shape on to the thick card. On the thick card, using a ruler, draw a line measuring in 4cm from the edge all the way round.</li>
                  <li>Ask a grown up to help cut along the line to cut the middle section out.</li>
                  <li>Paint the frame section to make it look colourful and leave to dry.</li>
                  <li>Arrange the petals and leaves on the frame and stick down with glue.</li>
                  <li>Now you just need a lovely photograph or drawing to put in your frame. You can use an A4 piece of paper or card to make a back for the frame.</li>
              </ol></p>
             </div>
            </div>
  
  
  
  
          
        </div>
      </div></div>
     
      <div className="col-md-4 mt-2 tall">
        <div className="card shawl2">
          <img src={Active1} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"><b>Make a Bee Hotel</b></h5>
            <p className="card-text">Bee numbers are falling, so by giving them a home you'll be encouraging nature into your garden and helping bee poupulations.</p>
            <button onclick="showPopup1()" className="a2">Find How</button>
  
          <div id="popup1" className="popup">
           <div className="popup-content">
              <span className="close" onclick="closePopup1()">&times;</span>
              <h5><b>Make a Bee Hotel</b></h5>
              <img src={Active1}alt="Image" className="image-fluid w-100"/>
              <p><b>What you'll need</b>
                A terracotta plant pot (9 – 15cm in size),
                Modelling clay,
                
                Plastic straws or bamboo canes,
                
                String.          </p>
            <p><b>What to do</b>
            <ol>
                <li>
                  Cut the straws or bamboo canes to a length that fits the depth of your pot. If you are using bamboo canes you will need a grown up to carry out this part as it’s tricky.              </li>
                <li>Tie the bundle of straws or canes together with a piece of string.</li>
                <li>Place some modelling clay in the bottom of the pot and stick the bundle of straws or canes in to the clay.</li>
                <li>Place the pot horizontally in your garden in a quiet place for the bees to move in.</li>
            </ol></p>
           </div>
          </div>
          </div>
        </div></div>
      <div className="col-md-4 mt-2 tall">
      <div className="card shawl2" >
        <img src={Active2} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"><b>Lovely Lavender Bags</b></h5>
          <p className="card-text">As the summer ends, collect some lavender flowers and dry them to make lavender bags. They smell lovely and are great to give as presents.</p>
          <button onclick="showPopup2()" className="a2">Find How</button>
  
          <div id="popup2" className="popup">
           <div className="popup-content">
              <span className="close" onclick="closePopup2()">&times;</span>
              <h5><b>Lovely Lavender Bags</b></h5>
              <img src={Active2} alt="Image" className="image-fluid w-100"/>
              <p><b>What you'll need</b>
                Some thin material like muslin, Scissors,Ribbon,Lavender.          </p>
            <p><b>What to do</b>
            <ol>
                <li>
                  Take a 15cm square of material.              </li>
  <li>Using a CD or a flowerpot that's around the same size, draw a circle onto the material.</li>
  <li>Take a pair of scissors and cut out the circle template, and 15cm of ribbon.</li>
  <li>Carefully take the flowers buds off 10 sprigs of lavender (it is better to harvest the flowers when they are in bud before the flowers open. These can be hung up and dried for use later).</li>
  <li>Place these in the centre of your circle of material, then bring the edges of the material together to form a pouch.</li>
  <li>Take the 15cm piece of ribbon and tie around the pouch.</li>
  <li>Your lavender bag can be used to fragrance a drawer or can be hung in a wardrobe to keep moths away from your clothes.</li>
            </ol></p>
           </div>
          </div>
        </div>
      </div></div></div>
      <div className="row tall">
      <div className="col-md-4 mt-2 tall">
      <div className="card shawl2" >
        <img src={Active3} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"><b>Make a Garden Diary</b></h5>
          <p className="card-text">Use your garden diary to write or draw things you notice in your garden each month.</p>
          <button onclick="showPopup3()" className="a2">Find How</button>
  
          <div id="popup3" className="popup">
           <div className="popup-content">
              <span className="close" onclick="closePopup3()">&times;</span>
              <h5><b>Make a Garden Diary</b></h5>
              <img src={Active3}alt="Image" className="image-fluid w-100"/>
              <p><b>What you'll need</b>
                A4 plain and lined paper, A4 coloured paper,A ribbon or stapler,Pens or pencils.          </p>
            <p><b>What to do</b>
            <ol>
    <li>Take some pieces of A4 paper (as many as you need), and fold them in half to make a book. Fold a piece of coloured paper for the cover.</li>
    <li>You can tie your book together by using a piece of ribbon or stapling along the spine. ​Decorate the front cover to make it your special book.</li>
    <li>You can use it to record which seeds you’ve sown, how well they have grown and if you grew vegetables, did they taste yummy?</li>          
            </ol></p>
           </div>
          </div>
        </div>
      </div></div>
      <div className="col-md-4 mt-2 tall">
        <div className="card shawl2" >
          <img src={Active4} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"><b>Make a Kite</b></h5>
            <p className="card-text">Make a kite to use and enjoy the breezes in your garden or local park.</p>
            <button onclick="showPopup4()" className="a2">Find How</button>
  
            <div id="popup4" className="popup">
             <div className="popup-content">
                <span className="close" onclick="closePopup4()">&times;</span>
                <h5><b>Make a Kite</b></h5>
                <img src={Active4} alt="Image" className="image-fluid w-100"/>
                <p><b>What you'll need</b>
                  A sheet of A2 sugar paper or card (a smaller version can be made with A3),
                  <br/>
  Tissue paper,Scissors,Coloured paints and brushes,Sticky tape or a stapler,Hole punch,String,
  Cane or stick around 30cm in length.           </p>
              <p><b>What to do</b>
              <ol>
                  <li>
                    Paint one side of the paper with a pattern or a picture and leave it to dry.                </li>
  <li>Cut strips of tissue paper approximately 5 cm wide. Turn the A2 paper so that the painted side is facing down, and attach the ends of the tissue strips to one long side of the A2 paper using sticky tape.</li>
  <li>Turn the A2 paper in to a cylinder shape with the painted pattern on the outside. Staple at the top and bottom and use sticky tape to secure on the inside.</li>
  <li>At the other end of the cylinder (and the tissue strips), punch a hole at either side. Cut some string and thread it through each hole and tie.</li>
  <li>Attach the string to the cane.</li>
  <li>Go outside and run, holding your kite behind you.</li>
  
                  </ol></p>
             </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-2 tall">
        <div className="card shawl2">
          <img src={Active5} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"><b>Make a Cake for birds</b></h5>
            <p className="card-text">Give the birds in your garden a winter treat by making them some bird cake to eat.</p>
             <button onclick="showPopup6()" className="a2">Find How</button>
  
          <div id="popup6" className="popup">
           <div className="popup-content">
              <span className="close" onclick="closePopup6()">&times;</span>
              <h5><b>Make a Cake for birds</b></h5>
              <img src={Active5} alt="Image" className="image-fluid w-100"/>
              <p><b>What you'll need</b>
                Fat - use suet or lard (85g),Good quality wild birdseed, A handful of raisins,A handful of peanuts, Some grated cheese,
  Bowls and wooden spoons, Apron,Yoghurt pots with holes in the bottom threaded with string.          </p>
            <p><b>What to do</b>
            <ol>
                <li>
                  Put the fat in a bowl and leave in a warm place to soften, such as a radiator.              </li>
  <li>Place all the other ingredients into a big bowl.</li>
  <li>Chop up the fat into small pieces and add to the other ingredients in the bowl. You can mix them together using a wooden spoon or your fingers.</li>
  <li>Ask a grown up to make a hole in the bottom of a clean yoghurt pot. Double the string, tie a knot at the end and thread through the hole so that the knot is on the inside and the loop is outside the pot.</li>
  <li>Put the mixture into the yoghurt pot or make into balls. Put the bird cake into the fridge to set. And then put it in your garden for the birds to enjoy!</li>
  
                </ol></p>
           </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row tall">
    <div className="col-md-4 mt-2  ">
      <div className="card shawl2" >
        <img src={Active6} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"><b>Make a Pencil holder using twigs</b></h5>
          <p className="card-text">Makae this great pencil holder asa present or just for you to use.Useat your office or at home.</p>
           <button onclick="showPopup()" className="a2">Find How</button>
  
          <div id="popup" className="popup">
           <div className="popup-content">
              <span className="close" onclick="closePopup()">&times;</span>
              <h5><b>Make a Pencil holder using twigs</b></h5>
              <img src={Active6} alt="Image" className="image-fluid w-100"/>
              <p><b>What you'll need</b>
                A clean, empty gravy granules pot or similar,Lots of small twigs,Scissors,lastic bands,Paper,Glue,Raffia or ribbon.          </p>
            <p><b>What to do</b>
            <ol>
                <li>
                  Cover the pot with paper of your choice and glue it in place.              </li>
  <li>Place two elastic bands around the pot, towards the top and bottom. Choose twigs that are just a bit longer than the empty pot and put them underneath the elastic bands so that they hold them in place.</li>
  <li>Work your way around the pot so that it is all covered by twigs.</li>
  <li>Use some raffia or ribbon and tie it on top of the elastic bands to hide them.</li>
  <li>You could add some glitter for that extra festive sparkle!</li>
                </ol></p>
           </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 mt-2 tall">
      <div className="card shawl2">
        <img src={Active7} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"><b>Play Conkers</b></h5>
          <p className="card-text">Conker is a great game to play with your family and friends.Just choose a strong conker for your competition.</p>
           <button onclick="showPopup7()" className="a2">Find How</button>
  
          <div id="popup7" className="popup">
           <div className="popup-content">
              <span className="close" onclick="closePopup7()">&times;</span>
              <h5><b>Play Conkers</b></h5>
              <img src={Active7} alt="Image" className="image-fluid w-100"/>
              <p><b>What you'll need</b>
                Conkers, Screwdriver or nail,String,An opponent (someone to play against).          </p>
            <p><b>What to do</b>
            <ol>
                <li>
                  Before you can play conkers, you need to find some! Go for an exploring walk through your local park or gardens and see how many conkers you can find. They are a shiny, brown colour and are the seeds from the horse chestnut tree.              </li>
  <li>Choose a big, strong conker for your competition.</li>
  <li>Get a strong grown up to make a hole going right through your conker from top to bottom.</li>
  <li>Carefully thread a length of string through your conker and tie it in a knot at one end to stop it falling off.</li>
  <li>Get playing! One player holds their conker steady, dangling from the string, whilst the other player tries to hit it with their conker.</li>
  <li>The winner is the person who has a conker left on their string.</li>
                </ol></p>
           </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 mt-2 tall">
      <div className="card shawl2">
        <img src={Active8} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"><b>A Crown from leaves or petals</b></h5>
          <p className="card-text">Make a natural crown decorated with petals and leaves, for celebrations.</p>
           <button onclick="showPopup8()" className="a2">Find How</button>
  
          <div id="popup8" className="popup">
           <div className="popup-content">
              <span className="close" onclick="closePopup8()">&times;</span>
              <h5><b>A Crown from leaves or petals</b></h5>
              <img src={Active8} alt="Image" className="image-fluid w-100"/>
              <p><b>What you'll need</b>
                A strip of card about 10cm wide, that is long enough to wrap around your head with a slight overlap, Double sided sticky tape, Scissors,Collecting bag.          </p>
            <p><b>What to do</b>
            <ol>
                <li>
                  To make the crown cut a strip of card 10cm wide and measure it around your head to make sure that it is long enough. Put the piece of card on a flat surface and using the double sided sticky tape place a line of tape in the middle along the whole length of the card.              </li>
    <li>Go out into your garden or for a walk in your local park and look for lovely petals and leaves that have fallen to the ground – don’t pick off the plants! Carefully put them in your collecting bag and take them home.</li>
    <li>Take the top layer of the sticky tape away so that it feels sticky to touch and design and decorate your crown by placing petals and leaves on to the card. Leave a space at each end with no petals and leaves, so that you can stick the ends together when you have finished.</li>
    <li>Ask a grown up to help measure the card round your head so that it fits and press the ends together. Why not have a lovely picnic in your garden wearing your summer crowns?</li>
    
                </ol></p>
           </div>
          </div>
        </div>
      </div>
    </div></div>
  <div className="row tall">
    <div className="col-md-4 mt-2 tall">
      <div className="card shawl2">
        <img src={Active9} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"><b>Be an Animal Detective</b></h5>
          <p className="card-text">Find out which animals are visiting your garden at night. <b>Please note:This activity involves nuts, so please avoid if you have a nut allergy.Perform this activity at your own risk.</b></p>
           <button onclick="showPopup9()" className="a2">Find How</button>
  
          <div id="popup9" className="popup">
           <div className="popup-content">
              <span className="close" onclick="closePopup9()">&times;</span>
              <h5><b>Be an Animal Detective</b></h5>
              <img src={Active9} alt="Image" className="image-fluid w-100"/>
              <p><b>What you'll need</b>
                Plastic pipe 7cm in diameter, 30cm long,A piece of A4 plain white paper,One colour of non-toxic poster paint and a brush, Vegetable oil,Two pieces of greaseproof paper, each 7x4cm in size,Stapler,Peanut butter and a long stick.          </p>
            <p><b>What to do</b>
            <ol>
              <li>Put the paint in a pot and add the same amount of vegetable oil, mix it in with the brush. Paint the mixture on to the two pieces of greaseproof paper.</li>
                <li>
                  Put the paint in a pot and add the same amount of vegetable oil, mix it in with the brush. Paint the mixture on to the two pieces of greaseproof paper.              </li>
   <li>Very carefully slide the paper into the piece of pipe.</li>
   <li>Put a large blob of peanut butter on to the end of the long stick and place it inside the pipe on the paper. Remove the stick. The food will smell yummy and attract some animals!</li>
   <li>Place the pipe in longer grass or near a wall or hedge and leave it overnight. In the morning, carefully slide out the paper and see which animal is visiting your garden at night time!</li>       
          
                </ol></p>
           </div>
          </div>
        </div>
      </div>
    </div>
   
    <div className="col-md-4 mt-2 tall">
      <div className="card shawl2">
        <img src={Actives} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"><b>Make and follow a trail</b></h5>
          <p className="card-text">You can play this game in your garden or in your park or woodland. Get a group of family or friends and split into two teams:one team to lay the tracks and one team to follow them.</p>
           <button onclick="showPopupp()" className="a2">Find How</button>
  
          <div id="popupp" className="popup">
           <div className="popup-content">
              <span className="close" onclick="closePopupp()">&times;</span>
              <h5><b>Make and follow a trail</b></h5>
              <img src={Actives} alt="Image" className="image-fluid w-100"/>
              <p><b>What you'll need</b>
                Enough people to make two teams – make sure you have at least one adult on each team,A selection of sticks and stones,A key of tracking symbols.          </p>
            <p><b>What to do</b>
            <ol>
                <li>
                  Get one team to lay the trail              </li>
  <li>Give them a head start, then follow their trail to see where it leads</li>
            </ol></p>
           </div>
          </div>
        </div>
      </div>
    </div>
    
    
    <div className="col-md-4 mt-2 tall">
      <div className="card shawl2">
        <img src={Actives1} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"><b>Drinking trays for birds</b></h5>
          <p className="card-text">Birds in your garden need access to clean water all year round, but especially when the weather turns cold and water turns to ice. See how to make a drinking tray for birds.</p>
           <button onclick="showPopupt()" className="a2">Find How</button>
  
          <div id="popupt" className="popup">
           <div className="popup-content">
              <span className="close" onclick="closePopupt()">&times;</span>
              <h5><b>Drinking trays for birds</b></h5>
              <img src={Actives1} alt="Image" className="image-fluid w-100"/>
              <p><b>What you'll need</b>
                A large clean yoghurt pot,
  
                A terracotta or plastic plant pot tray, with a depth of about 2cm.          </p>
            <p><b>What to do</b>
            <ol>
                <li>
                  Ask a grown up to help you make a small hole in the yoghurt pot about 1cm from the rim.              </li>
  <li>Fill the pot with cold water and put the plant pot tray on top.</li>
  <li>Very carefully and holding on tightly, turn the two, still pushed together, so that the yoghurt pot is now upside down. The water will flow into the tray and will stop at the level of the hole in the yoghurt pot.</li>
  <li>As the birds have a drink the water will refill from inside the yoghurt pot.</li>
  <li>Watch and see which birds come to drink the water.</li>
  
  
  
                </ol></p>
           </div>
          </div>
        </div>
      </div>
    </div></div>
    <div className="row tall">
    <div className="col-md-4 mt-2 tall">
      <div className="card shawl2">
        <img src={Actives2} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"><b>Butterfly Crop Protector</b></h5>
          <p className="card-text">Design and make a fantastic insect crop protector to keep the birds away from your plants.</p>
           <button onclick="showPopupe()" className="a2">Find How</button>
  
          <div id="popupe" className="popup">
           <div className="popup-content">
              <span className="close" onclick="closePopupe()">&times;</span>
              <h5><b>Butterfly Crop Protector</b></h5>
              <img src={Actives2} alt="Image" className="image-fluid w-100"/>
              <p><b>What you'll need</b>
                A range of waterproof materials – e.g. empty plastic drinks bottles, bubble wrap, empty yoghurt pots (make sure your have cleaned the containers before using).
  
                Thick pipe cleaners or garden wire, PVA glue,Sticky tape, String, Cane or stick,Red string or piece of plastic.          </p>
            <p><b>What to do</b>
            <ol>
                <li>
                  To make the wings, bend a large pipe cleaner or piece of wire in to a loop and twist the ends together. Cover the wings with a piece of bubble wrap, fabric or other waterproof material, and use sticky tape or glue to fix it on to the wing shape. You will need to make four wings; think about patterns and colours if you decorate them.              </li>
  <li>Take the clean drinks bottle and, using pipe cleaners or wire, attach the wings around the bottle.</li>
  <li>Fix two further pieces of wire or pipe cleaners to the top of the bottle to be the antennae and stick the red piece of plastic in the bottle opening to represent the proboscis (the long 'nose' on the front of an insect).</li>
  <li>Attach your butterfly by string or wire to the cane and choose somewhere to place it in your vegetable plot.</li>
                </ol></p>
           </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 mt-2 tall ">
      <div className="card shawl2" >
        <img src={Actives3} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"> <b>Make a measuring stick to grow plants</b></h5>
          <p className="card-text">Try making a colourful measuring stick to use when are sowing.</p>
           <button onclick="showPopupd()" className="a2">Find How</button>
  
          <div id="popupd" className="popup">
           <div className="popup-content">
              <span className="close" onclick="closePopupd()">&times;</span>
              <h5><b>Make a measuring stick to grow plants</b></h5>
              <img src={Actives3}alt="Image" className="image-fluid w-100"/>
              <p><b>What you'll need</b>
                A piece of wood 1m long, 5-10 cm wide, 1–2 cm deep
   Sandpaper,Tape measure or ruler, Pencil, Permanent marker pens (black),Coloured pens or paints for decoration,Varnish and brush.          </p>
            <p><b>What to do</b>
            <ol>
                <li>
                  If not already in 1m lengths, ask an adult to saw the wood to the sizes given above.              </li>
  <li>Use the sandpaper to carefully smooth the edges of the sticks.</li>
  <li>Take the tape measure or ruler and mark on one side of the wood, using a pencil, 5cm spacings (i.e. 5cm, 10cm, 15cm etc). Once you have do done this, go over the pencil lines with permanent pen.</li>
  <li>On the other side of the wood, mark 10 or 15cm spacings. These can also be used for multiples of 30cm/45cm.</li>
  <li>You can decorate your stick with pictures of vegetables and fruit; make sure you can still see the numbers. Ask an adult to help you give the measuring stick a protective coat of varnish.</li>
  
  
                </ol></p>
           </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 mt-2 tall">
      <div className="card shawl2" >
        <img src={Actives4} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"> <b>Make Snap  Cards</b></h5>
          <p className="card-text">Collect pairs of similar looking petals, flowers or leaves and use them to make a set of cards.</p>
           <button onclick="showPopupl()" className="a2">Find How</button>
  
          <div id="popupl" className="popup">
           <div className="popup-content">
              <span className="close" onclick="closePopupl()">&times;</span>
              <h5><b>Make Snap  Cards</b></h5>
              <img src={Actives4} alt="Image" className="image-fluid w-100"/>
              <p><b>What you'll need</b>
                Collecting bag,
  
                Petals, flowers and leaves from the garden,Newspapers,Heavy books, Thick card,Pencil and ruler,Scissors,PVA glue.          </p>
            <p><b>What to do</b>
            <ol>
                <li>
                  First you will need to press the petals and leaves you have collected. To do this open out some sheets of newspaper and on one side spread the leaves and petals so they are not touching each other. Close the other side of the paper over the top and place it somewhere flat with some heavy books on top of it.              </li>
  <li>After a week, check on the petals and see if they are flat and ready to use.</li>
  <li>Count how many petals and leaves you have. You will need to cut out the same number of rectangles from the card.</li>
  <li>Ask a grown up to help cut out the rectangles for your cards.</li>
  <li>Lay out your cards and place one petal or leaf on each and stick them down with glue.</li>
  
                </ol></p>
           </div>
          </div>
        </div>
      </div></div>
    </div>
  
  
  
  
  
  
  
  
  
  
  
  <div className="row tall">
   <div className="col-md-1"></div>
  <div className="col-md-5 mt-3 tall" >
    <div className="card shred3" >
      <img src={Actives5} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><b>BookMarks.</b></h5>
        <p className="card-text">Print Your Favourite Bookmarks from here, and 
          simply insert it between the pages of your book or documents  to easily find and return to that specific page without having to search through the entire document.
  
        </p>
        <button onclick="showPopupma()" className="a2">Find How</button>
  
        <div id="popupma" className="popup">
         <div className="popup-content">
            <span className="close" onclick="closePopupma()">&times;</span>
            <h5><b>Print These and use</b></h5>
            <img src={Actives5} alt="Image" className="image-fluid w-50 h-25"/>
            <img src={Actives6} alt="Image" className="image-fluid  w-50 h-25"/>
            <img src={Actives7} alt="Image" className="image-fluid  w-50 h-25"/>
            <img src={Actives8} alt="Image" className="image-fluid  w-50 h-25"/>
  
            <img src={Actives9} alt="Image" className="image-fluid  w-50 h-25"/>
            <img src={Activ} alt="Image" className="image-fluid  w-50 h-25"/>
  
  
         </div>
        </div>    </div>
    </div>
  </div>
    <div className="col-md-6 mt-3 tall">
      <div className="card card45 shred3" >
        <img src={Activ1} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"><b>Scavenger Hunt.</b></h5>
          <p className="card-text">
            A scavenger hunt game is an interactive activity where you are given a list of items or clues to find within a specific area or location.
            The goal is to locate and collect all the items or solve the clues within a given time frame.
          </p>
          <button onclick="showPopuprh()" className="a2">Find How</button>
  
          <div id="popuprh" className="popup">
           <div className="popup-content">
              <span className="close" onclick="closePopuprh()">&times;</span>
              <h5><b>Find A Leaf that</b></h5>
              <br/>
              <div className="container">
              <div className="row tall">
              <div className="col-md-6 ">
                <p><i className="fas fa-square fa-sm sqr"></i>  is taller than you
                  <br/>
                  <br/>
                  <i className="fas fa-square fa-sm sqr" ></i>  has stripes on it
                  <br/>
                  <br/>
                  <i className="fas fa-square fa-sm sqr" ></i>  is heart shaped
                  <br/>
                  <br/>
                  <i className="fas fa-square fa-sm sqr" ></i>  is fuzzy or soft
                  <br/>
                  <br/>
                  <i className="fas fa-square fa-sm sqr"></i>  has holes
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <i className="fas fa-square fa-sm sqr" ></i>  has yellow spots
                  <br/>
                  <br/>
                  <i className="fas fa-square fa-sm sqr" ></i>  is smaller than a penny
  <br/>
  <br/>
  <i className="fas fa-square fa-sm sqr" ></i>  is triangle shaped
  <br/>
  <br/>
  <i className="fas fa-square fa-sm sqr"></i>  looks like fan
  <br/>
  <br/>
  <i className="fas fa-square fa-sm sqr"></i>  has white spots
  
                </p>
              </div></div>
              <div className="row tall">
              <hr className="border-3 opacity75"/>
              <h5><b>Can you find these Plants?</b></h5>
              <div className="col-md-4">
                <img src={Activ2} alt="" className="image-fluid w-750 h-50 rdi"/>
                <p>Dandelions</p>
              </div>
              <div className="col-md-4">
                <img src={Activ3} alt="" className="image-fluid w-75 h-50 rdi"/>
                <p>Air Plants</p>
              </div>
              <div className="col-md-4">
                <img src={Activ4}alt="" className="image-fluid w-75 h-50 rdi"/>
                <p>Banana</p>
                
              </div>
              <div className="col-md-4">
                <img src={Activ5} alt="" className="image-fluid w-75 h-50 rdi"/>
                <p>Bromeliad</p>
              </div>
              <div className="col-md-4">
                <img src={Activ6} alt="" className="image-fluid w-75 h-50 rdi"/>
                <p> Palm tree</p>
              </div>
              <div className="col-md-4">
                <img src={Activ7} alt="" className="image-fluid w-75 h-50 rdi"/>
                <p>Orchid</p>
              </div>
             </div></div>
           </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  <br/>
      <br/>
      <br/>
      <div id="bg">
      <div className="banner">
        <div className="row">
          <div className="col">
            <h2><b>Take A Quiz!</b> </h2><br/>
        <p>
          Take this simple quiz to find out what flower you are.<br/> You could end up being your very favorite flower, or you may find a new favorite</p>
          <br/> <a  className="doc" href="quiz.html"><b>CLICK HERE</b></a>
          </div>
        </div>
      </div>
    </div>
      <br/>
      <br/>
      <br/>
    
    </>
  )
}

export default activities
