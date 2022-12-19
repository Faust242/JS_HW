const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts';

const container = document.createElement('main');
document.body.append(container)


const getData = (url, method) =>{
    return new Promise((resolve, reject) => {
        const postsXHR = new XMLHttpRequest();
        
        if (method == 'GET') {  
            postsXHR.open('GET', url);
            postsXHR.responseType = 'json';
            postsXHR.send();
            postsXHR.onload = () => {
                resolve(postsXHR.response);
            }
            postsXHR.onerror = (err) => {
                reject(err)
            }
        }
        if (method == "DELETE") {
            postsXHR.open('DELETE', url);
            postsXHR.responseType = 'json';
            postsXHR.send();
           
        }
    })
}


const renderPosts = (posts, container) => {
    posts.forEach((element) => {
        const title = element.title;
        const body = element.body;
        const id = element.id
        const titleH1 = document.createElement('h1');
        const bodyH3 = document.createElement('h3');
        const btnShow = document.createElement('button');
        const btnHide = document.createElement('button');
        const commentsP = document.createElement('p');
        const div = document.createElement('div');

        titleH1.innerText = title;
        bodyH3.innerText = body;
        btnShow.innerText = 'Show comments';
        btnHide.innerText = 'Hide comments';
        btnHide.classList.add('hide');

        div.append(titleH1, bodyH3, commentsP, btnShow, btnHide)
        container.append(div)

        btnShow.addEventListener('click', ()=>{
            getData(`${URL_POSTS}/${id}/comments`, 'GET').then(data=>{
                data.forEach(comment => {
                    commentsP.innerText = comment.body;
                })
                btnHide.classList.toggle('hide');
                btnShow.classList.toggle('hide');
            })
        });
        btnHide.addEventListener('click', ()=>{
            getData(`${URL_POSTS}/${id}/comments`, 'GET').then(data=>{
                data.forEach(comment => {
                    commentsP.innerText = '';
                })
                btnHide.classList.toggle('hide');
                btnShow.classList.toggle('hide');
            })
        });
})}


getData(URL_POSTS, 'GET')
    .then((posts) => {
        renderPosts(posts, container)
    })
    .catch((err)=>{
        console.log(err)
    })

