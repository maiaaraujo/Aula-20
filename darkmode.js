if (localStorage.getItem('darkmode') === "true") {
    dark.checked = true; //marcando o input/switch
    
    alterarCores()
}

function alterarCores() {
    if (dark.checked) {
        document.body.classList.add('bg-dark');
        document.body.classList.add('text-white');
        tabela.classList.add('table-dark');
    } else {
        document.body.classList.remove('bg-dark');
        document.body.classList.remove('text-white');
        tabela.classList.remove('table-dark');
    }
}

function ativarDarkmode() {
   if (dark.checked) {
    localStorage.setItem('darkmode', true);
   }else {
    localStorage.setItem('darkmode', false);
   }

   alterarCores()
}



/////////////////ARRAY DE OBJETOS /////////////////////////

let alunos = [
    {
        id: 1,
        nome: "Ana Kelly",
        email: "kelly@gmail.com",
        telefone: "00 0000-0000",
        cidade: "Fortaleza-CE"
        
    },
    {
        id: 2,
        nome: "Andy Silva",
        email: "kelly@gmail.com",
        telefone: "00 0000-0000",
        cidade: "Fortaleza-CE"
        
    },
    {
        id: 3,
        nome: "Lane Gomes",
        email: "kelly@gmail.com",
        telefone: "00 0000-0000",
        cidade: "Fortaleza-CE"
        
    },
    {
        id: 4,
        nome: "Sara Camilo",
        email: "kelly@gmail.com",
        telefone: "00 0000-0000",
        cidade: "Fortaleza-CE"
        
    },
    {
        id: 5,
        nome: "Samantha Kuran",
        email: "kelly@gmail.com",
        telefone: "00 0000-0000",
        cidade: "Fortaleza-CE"
        
    }
]

let tabelab = document.getElementById("tabela-body");
tabelab.innerHTML = `<tr>
<td>${alunos[4].nome}</td>
<td>${alunos[4].email}</td>
<td>${alunos[4].telefone}</td>
<td>${alunos[4].cidade}</td>
<td>
    <button class="btn btn-warning">Editar</button>
    <button class="btn btn-danger">Excluir</button>
</td>
</tr>`;