


// This is the list of topics
const topics = ["HTML", "CSS", "Git", "JavaScript"];

const randomTopic = topics[Math.floor(Math.random() * topics.length)];
// This is the function to list the topics
function listTopics() {
    for(let x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}
    // This is the function to select a topic
function selectTopic() {
 
    if (topics[0] === 'HTML') {
    console.log("Let's study HTML!");
  
}  else if (topics [0]=== 'CSS') {            
     console.log("Let's study CSS!");

  } else if (topics[0] === 'Git'){
    console.log("Let's study Git!");

  } else if (topics[0] === 'JavaScript') {
    console.log("Let's study JavaScript!");

  } else  {
    console.log('Please try again!'); }
   
     }
    
//  this calls the function above to get the list of topics
console.log('Here are the topics we learned through Prework:');
listTopics();

console.log('Which topic should we study first?');
selectTopic();


