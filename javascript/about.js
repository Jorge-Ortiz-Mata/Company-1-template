let value = 0;
const staff = [
    {
        name: 'Susana Smith',
        role: 'IT Manager',
        email: 'susan@ixw.com',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        image: '../media/belinda.jpg'
    },
    {
        name: 'George Howard',
        role: 'Project Manager',
        email: 'george@ixw.com',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        image: '../media/george.jpg'
    },
    {
        name: 'Matthew Bellamy',
        role: 'Software tester',
        email: 'matthew@ixw.com',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        image: '../media/joseph.jpg'
    },
    {
        name: 'Maria Phillips',
        role: 'Sales Manager',
        email: 'maria@ixw.com',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        image: '../media/maria.jpg'
    },   
];

seeNextMember = () => {
    value++;
    if(value < staff.length){
        member_name.innerHTML = `${staff[value].name}`;
        member_role.innerHTML = `${staff[value].role}`;
        member_email.innerHTML = `<b>${staff[value].email}</b>`;
        member_description.innerHTML = `${staff[value].description}`;
        image_card.src = `${staff[value].image}`;
    }
    else{
        value = 0;
        member_name.innerHTML = `${staff[value].name}`;
        member_role.innerHTML = `${staff[value].role}`;
        member_email.innerHTML = `<b>${staff[value].email}</b>`;
        member_description.innerHTML = `${staff[value].description}`;
        image_card.src = `${staff[value].image}`;
    }
}

seePreviousMember = () => {
    value--;
    if(value < 0){
        value = staff.length - 1;
        member_name.innerHTML = `${staff[value].name}`;
        member_role.innerHTML = `${staff[value].role}`;
        member_email.innerHTML = `<b>${staff[value].email}</b>`;
        member_description.innerHTML = `${staff[value].description}`;
        image_card.src = `${staff[value].image}`;
    }
    else{
        member_name.innerHTML = `${staff[value].name}`;
        member_role.innerHTML = `${staff[value].role}`;
        member_email.innerHTML = `<b>${staff[value].email}</b>`;
        member_description.innerHTML = `${staff[value].description}`;
        image_card.src = `${staff[value].image}`;
    }
}

const member_name = document.querySelector('.member_name');
const member_role = document.querySelector('.member_role');
const member_email = document.querySelector('.member_email');
const member_description = document.querySelector('.member_description');
const image_card = document.querySelector ('.image_card');
const previousButton = document.querySelector('#previous');
const nextButton = document.querySelector('#next');

member_name.innerHTML = `${staff[value].name}`;
member_role.innerHTML = `${staff[value].role}`;
member_email.innerHTML = `<b>${staff[value].email}</b>`;
member_description.innerHTML = `${staff[value].description}`;
image_card.src = `${staff[value].image}`;

nextButton.addEventListener('click', seeNextMember);
previousButton.addEventListener('click', seePreviousMember);