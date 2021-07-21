
import './App.css';
import React from 'react'; 

const initialSkill = { skill:'', level: 3 }

class App extends React.Component {
  state = {
    skills: [{ skill: "JavaScript", level: 4 }], 
    newSkill: initialSkill
}; 

  addSkill = (e) => {
    // always prevent default! 
    // update the skills array by adding the user input (new skill) to that list of skills in state 
    e.preventDefault(); 
    this.setState(state => ({
    skills: [...state.skills, state.newSkill], 
    newSkills: initialSkill 
  }))
}

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value 
  
    console.log(e.target.checkValidity())   

    const newSkill = {
      ...this.state.newSkill, 
      // whatever was previously existing ^above, then below, adding a new piece of data, using object literal, replace the previously existing value 
      [ name ]: value 
  }
// above is an object literal 

    this.setState({ newSkill })
  } 

  render() {
    return (
      <section>
        <h2>DEV SKILLS</h2>
        
        <hr />

        {/* Show the skills in a list */}
        {this.state.skills.map(s => (
          <article key={s.skill}>
            <div>{s.skill}</div> <div>{s.level}</div>
          </article>
        ))}
        <hr />

        {/* Skills form */}
        <form onSubmit={this.addSkill}>
          <label>
            <span>SKILL</span>
            <input name="skill" 
            value={this.state.newSkill.skill} 
            onChange={this.handleChange} 
            
            required
            pattern=".{2,}"
            />


          </label>
          <label>
            <span>LEVEL</span>
            <select name='level' value={this.state.newSkill.level} onChange={this.handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <button> ADD SKILL</button>
        </form>
      </section>
    );
}

}
export default App;
