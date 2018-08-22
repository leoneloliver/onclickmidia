var ComponentProject = React.createClass({
  getInitialState: function() {
    return {
      projects: []
    }
  },
  componentDidMount: function() {
    var th = this;
    this.serverRequest = 
      axios.get(this.props.source)
        .then(function(result) {    
          th.setState({
            projects: result.data
          });
        })
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function() {
    return (
      <section className="projects">
        <h1>Projects</h1>
        <div className='clean row container'>
          {this.state.projects.map(function(project) {
            return (
              <div className='col-4'>
                <div className='card'>
                  <img alt={project.title} className='card-img-top' src={project.image} />
                   {
                     project.github.length > 0 &&
                      <div className='card-cover'>
                        <a href={project.github} target='_blank'>&lt;GET CODE /&gt;</a>
                      </div>
                  }
                  <div className='card-block'>
                    <h4 className='card-title'>{project.title}</h4>
                    <p className='card-text'>{project.text}</p>
                    <div className='card--info'>{project.info}</div>
                    <div className='card-footer'></div>
                    <a className='btn--hubba btn--full--sm btn_janagana' href={project.link} target='_blank'>Go somewhere</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>  
      </section>
    )      
  }
});
React.render(<ComponentProject source="https://api.myjson.com/bins/yu53k" />, document.querySelector("project-list"));


var ComponentSkill = React.createClass({
  getInitialState: function() {
    return {
      skills: []
    }
  },
  componentDidMount: function() {
    // Is there a React-y way to avoid rebinding `this`? fat arrow?
    var th = this;
    this.serverRequest = 
      axios.get(this.props.source)
        .then(function(result) {    
          th.setState({
            skills: result.data
          });
        })
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function() {
    return (
      <section className="skills" id="skill">
        <div className="container">
          <h1>Skills</h1>
          {this.state.skills.map(function(skill) {
            return (
              <div className="chart" data-percent={skill.porcent}>{skill.title}</div>
            );
          })}
       </div>
      </section>
    )      
  }
});
React.render(<ComponentSkill source="https://api.myjson.com/bins/mayov" />, document.querySelector("skills"));


var ComponentAbout = React.createClass({
  getInitialState: function() {
    return {
      about: []
    }
  },
  componentDidMount: function() {
    // Is there a React-y way to avoid rebinding `this`? fat arrow?
    var th = this;
    this.serverRequest = 
      axios.get(this.props.source)
        .then(function(result) {    
          th.setState({
            about: result.data.profile
          });
        })
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function() {
    return (
      <section className="col-wrapper">
        <div className="col-container" id="col-container">
          <div className="wrapper-abaut">
            <h1 className="title-about">About</h1>
            {this.state.about.map(function(me) {
              return (
                <div>
                  <div className="img-responsive">
                    <img src={me.picture} className="p-about" />
  		            </div>
                  <div className="txt-about">{me.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    )      
  }
});
React.render(<ComponentAbout source="https://api.myjson.com/bins/1g4s3j" />, document.querySelector("about"));



var ComponentHeader = React.createClass({
  render: function() {
    	return (
    	  <section className="scroll-down" id="scroll-down">
          <div className="banner-wrap"></div>
          <h1>{this.props.name} <i className="fa fa-code"></i></h1>
          <div className="sub-title">Front end Developer</div>
          <div className="scroll-down-arrow" id="animate"></div>
        </section>
    	)
    }
});
React.render(<ComponentHeader name="Leonel Oliveira" subtitle="Front end Developer" />, document.querySelector("header-banner"));


var ComponentFooter = React.createClass({
  render: function(){
   return (
    <section className='footer'>
      <h1 className="clean-font">contact me</h1>
      <p>
        <a className="clean-font github" href="https://github.com/leoneloliver" target="_blank">
          <i className="fa fa-github clean-font"></i>
          &nbsp;&nbsp;Github
        </a>
      </p>
      <p>
        <a className="clean-font linkedin" href="http://www.linkedin.com/in/leonel-oliveira" target="_blank">
          <i className="fa fa-linkedin clean-font"></i>
          &nbsp;&nbsp;LinkedIn
        </a>
      </p>
      <p className="clean-font">leoneloliver@gmail.com</p>
      <div className="copy">
        Made with <i className="fa fa-heart"></i> by Leonel Oliveira
      </div>
    </section>
  ) 
  }
});
React.render(<ComponentFooter />, document.querySelector("footer"));


var ComponentTimeline = React.createClass({
  getInitialState: function() {
    return {
      timelines: []
    }
  },
  componentDidMount: function() {
    // Is there a React-y way to avoid rebinding `this`? fat arrow?
    var th = this;
    this.serverRequest = 
      axios.get(this.props.source)
        .then(function(result) {    
          th.setState({
            timelines: result.data
          });
        })
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function() {
    return (
      <section className="timeline" id="timeline">
        <div className="container">
	        <img src={this.props.avatar} className="profile"/>
		      <h1>Timeline</h1>
		      <div id="timeline">
          {this.state.timelines.map(function(timeline) {
            return (
            <div className="timeline-horizontal">
      			  <div className="timeline-item">
      				  <div className="timeline-icon">
      				    <i className={timeline.icon} aria-hidden="true"></i>
      			    </div>
                {
                timeline.position == "left" &&
                <div className='timeline-content show-left steps'>
        				  <h2>{timeline.title}</h2>
                	<p className="timeline-text">{timeline.institution}</p>
        					<div className="timeline-image no-overflow timeline-text">
        					{timeline.city}<br/>
                  {timeline.date}<br/>
        				  </div>
        				</div>  
                }
                {
                timeline.position != "left" &&
                <div className='timeline-content show-right right steps'>
        					<h2>{timeline.title}</h2>
                	<p className="timeline-text">{timeline.institution}</p>
        					<div className="timeline-image no-overflow timeline-text">
        					{timeline.city}<br/>
                  {timeline.date}<br/>
        				  </div>
        				</div>  
                }
        			</div>
      			 </div> 
            );
          })}
          </div>
          <div className="resume">
            <a href={this.props.resume} className="btn--hubba btn--full--sm btn--resume" target="_blank">Download Resume</a>
          </div>
        </div>
      </section>
    )      
  }
});
React.render(<ComponentTimeline source="https://api.myjson.com/bins/kfffv" avatar="/img/profile-1.jpg" resume="http://onclickmidia.net/resume/Leonel_front_end_dev.pdf"/>, document.querySelector("timeline"));
//https://api.myjson.com/bins/19yjbr 

            
     






