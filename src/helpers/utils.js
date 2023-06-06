//function that receives an aray of stacks from a source to get all the stack
//information and icons to populate a TechStack component
// export function getStack(source) {
//     const techs = require('../data/techStack.json');
//     const stack = [];
//     for (let item of source) {
//         let techData = techs.find(tech => tech.tag === item);
//         let techIcon = require('../assets/icons/techstack/' + techData.iconFileName);
//         const techObj = { techName: techData.name, icon: techIcon, altText: techData.iconAltText }
//         stack.push(techObj);
//     }

//     return stack;
// }

//function that receives an array of project tags from a source to get all the projects information
// export function getFeaturedProjects(source) {
//     const projects = require('../data/projects.json');
//     const projectsImages = require('../data/projectsImages.json');
//     const projectsData = [];
//     for (let item of source) {
//         //get project information
//         let projectData = projects.find(proj => proj.tag === item);
//         //get mockup images
//         let projectImages = projectsImages.find(proj => proj.project === projectData.tag);
//         projectData.imageLaptop = projectImages.mockups.find(image => image.type === 'laptop');
//         projectData.imageDevices = projectImages.mockups.find(image => image.type === 'devices');
//         projectData.imageLaptop.image = require(`../assets/images/projects/${projectData.tag}/${projectData.imageLaptop.filename}`);
//         projectData.imageDevices.image = require(`../assets/images/projects/${projectData.tag}/${projectData.imageDevices.filename}`);
//         projectsData.push(projectData);
//     }

//     return projectsData;
// }

//function that receives a project to get all the project information
// export function getProject(project) {
//     const projects = require('../data/projects.json');
//     const projectsImages = require('../data/projectsImages.json');

//     //get project information
//     let projectData = projects.find(proj => proj.nameLC === project);
    
//     //get project media
//     let projectImages = projectsImages.find(proj => proj.project === projectData.tag);
//     //mockup images
//     projectData.imageLaptop = projectImages.mockups.find(image => image.type === 'laptop');
//     projectData.imageDevices = projectImages.mockups.find(image => image.type === 'devices');
//     projectData.imageLaptop.image = require(`../assets/images/projects/${projectData.tag}/${projectData.imageLaptop.filename}`);
//     projectData.imageDevices.image = require(`../assets/images/projects/${projectData.tag}/${projectData.imageDevices.filename}`);
//     //screenshots
//     for(let imageData of projectImages.screenshots) {
//         imageData.image = require(`../assets/images/projects/${projectData.tag}/Screenshots/${imageData.filename}`)
//     }
//     projectData.screenshots = projectImages.screenshots;
    

//     return projectData;
// }


//function that receives an array of objects to be rendered as a TitledList component 
// export function getTitledListData(source) {
//     const keys = [];
//     const items = [];
//     for (let key in source) {
//         keys.push(key);
//         items.push(source[key]);
//     }
//     const titledListData = { titles: keys, lists: items };
//     return titledListData;
// }

//function that receives author.tag and create object with icons and links for all author's socials
export function getSocials(author, color) {
    const authors = require('../data/authors.json');
    const authorData = authors.find(a => a.tag === author);
    const socials = [];
    for (let key in authorData.socials) {
        let socialIcon = require(`../assets/icons/${key}-${color}.svg`);
        let socialLink = authorData.socials[key]
        let social = { icon: socialIcon, link: socialLink, alt: `${key} logo in ${color}` };
        socials.push(social);
    }
    // let resume = {
    //     icon: require(`../assets/icons/socials/resume-${color}.png`),
    //     link: require(`../assets/resumes/${authorData.resumeFilename}`),
    //     alt: `icon representing a resume in ${color}`
    // }
    // socials.push(resume);

    return socials;
}