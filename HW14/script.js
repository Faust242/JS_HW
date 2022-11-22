  const formConfig = [
    {
      element: "text",
      name: "login",
      label: "Логин",
    },
    {
      element: "text",
      name: "age",
      label: "Возраст",
    },
    {
      element: "select",
      name: "language",
      label: "Выберите язык программирования",
      options: [
        {
          text: "JavaScript",
          value: "js",
        },
        {
          text: "Java",
          value: "java",
        },
        {
          text: "Python",
          value: "python",
        },
      ],
    },
  ];

  const dataObj = {};


  const createForm = function(arr){  
    const form = document.createElement('form');
    const btn = document.createElement('button');
    btn.innerText = 'Подтвердить';
        arr.forEach(function(obj) {
            if (obj.element === 'text'){
            //create DIV
                const divEl = document.createElement('div');
                form.append(divEl);
            // Create label
                const labelEl = document.createElement('label');
            //Set attributes to label
                labelEl.setAttribute('for',`${obj.name}`);
                labelEl.innerText = `${obj.label}`;
            //Create Input
                const inputEl = document.createElement('input');
            //Set attributes to input
                inputEl.setAttribute('type',`${obj.element}`);
                inputEl.setAttribute(`name`,`${obj.name}`);
                inputEl.setAttribute(`id`,`${obj.name}`);
            // Insert elements to DIV
                divEl.append(labelEl);
                divEl.append(inputEl);

                inputEl.addEventListener('input', (e)=> {
                    const key = e.target.getAttribute('name')
                    dataObj[`${key}`] = `${e.target.value}`
                 
                })
              
            } else if(obj.element === 'select'){
            //create DIV
                const divEl = document.createElement('div');
                form.append(divEl);
            // Create label
                const labelEl = document.createElement('label');
            //Set attributes to label
                labelEl.setAttribute('for',`${obj.name}`);
                labelEl.innerText = `${obj.label}`;
            //Create Select
                const selectEl = document.createElement('select');
            // Create Options
                obj.options.forEach((el) =>{
                    const optionEl = document.createElement('option');
                    optionEl.innerText = `${el.text}`;
                    optionEl.setAttribute('value', `${el.value}`);
                    selectEl.append(optionEl);
                }
                )
                divEl.append(labelEl);
                divEl.append(selectEl);
                selectEl.addEventListener('input', (e)=> {                   
                     dataObj.value = `${e.target.value}`
                 })
            }
        })
    document.body.append(form);
    form.append(btn);
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(dataObj)

    })

  }     
  createForm(formConfig);


