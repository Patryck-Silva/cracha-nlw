// const = variaveis que nao mudam
     
       
const linkRedeSocial = {
  github : "Patryck-Silva",
  youtube:"UCRAxq3UHNhWWySpwASUV9Bw",
  twitter:"CauePatryck",
  instagram: "tyckupnext"
  }

  function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
    const social = li.getAttribute('class')
      li.children[0].href = `https://${social}.com/${linkRedeSocial[social]}`
    }
  }

  function getGitHubProfileInfos(){
     const url = `https://api.github.com/users/${linkRedeSocial.github}`

     fetch(url)
     .then(response =>response.json())
     .then(data => {
       nome.textContent = data.name
       bio.textContent = data.bio
       userLink.href = data.html_url
       img.src = data.avatar_url
       userLogin.textContent = data.login
     })
  }

  getGitHubProfileInfos()
