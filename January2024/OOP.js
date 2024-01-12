// 2 Classes Developer and Website - Need Constructor Function, Attributes, and Methods


class Developer {
    constructor(name, email, location){
      this.languages = []
      this.name = name
      this.skills = []
      this.location = location
      this.email = email
      this.title = ''
      this.sites = []
    }
    createWebsite(siteName, stack, description) {
      var site = new Website(siteName, stack, description)
      this.sites.push(site)
      console.log(this.name, 'created', site.siteName)
      return site
    }
    brokeSite(other) {
      console.log(this.name, 'Is a meanie head and created a 404 on', other.sites[0].siteName)
    }
    fixedSite(other) {
      console.log(this.name, 'is the best TA ever and fixed', other.sites[0].siteName)
    }
  }
  
  
  class Website {
    constructor(siteName, stack, description){
      this.siteName = siteName
      this.stack = stack
      this.type = ''
      this.description = description
    }
    siteIsBroken() {
      console.log(this.siteName, '404')
    }
  }
  
  
  // Developer Instances
  let robert = new Developer('Robert', 'robert@teets.dev', 'Colorado')
  let melissa = new Developer('Melissa', 'me@me.com', 'PA')
  let justina = new Developer('Justina', 'justina@me.com', 'SC')
  
  
  // Website instances
  
  
  
  // Interacting with the created instances
  robert.createWebsite('PollGram','MERN', 'Poll App')
  robert.sites[0].siteIsBroken()
  melissa.brokeSite(robert)
  justina.fixedSite(robert)