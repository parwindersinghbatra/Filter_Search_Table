const searchResult = document.getElementById('search')

const tableData = [
    {
        Name:'Babar',
        LastName:'Azam',
        Country:'Pakistan',
    }, 
    {
        Name:'Pat',
        LastName:'Cummins',
        Country:'Australia'
    }, 
    { 
        Name:'Rohit',
        LastName:'Sharma',
        Country:'INDIA'
    },
    {
        Name:'Jos',
        LastName:'Buttler',
        Country:'England'
    }, 
    {
        Name:'Kane',
        LastName:'Williamson',
        Country:'New Zealand'
    },
    {
        Name:'Temba',
        LastName:'Bavuma',
        Country:'South Africa'
    }, 
    {
        Name:'Dasun',
        LastName:'Shanaka',
        Country:'Sri Lanka'
    }];

const searchTableResult = (dataset) => {
    const tableSearch = document.getElementsByTagName('tbody')[0]
    let tr = ""

    for(let data of dataset) {
        const trString = `<tr>
        <td>${data.Name}</td> 
        <td>${data.LastName}</td>
        <td>${data.Country}</td>
        </tr>`;
        
        tr += trString;
    }
    tableSearch.innerHTML = tr;
};

searchTableResult(tableData)

searchResult.addEventListener('keyup',(e) => {

    const SearchData = e.target.value.toLowerCase();
    const filterDataTable = tableData.filter((item) =>{
        if(item.Name.toLowerCase().includes(SearchData) || item.LastName.toLowerCase().includes(SearchData) || item.Country.toLowerCase().includes(SearchData)){
            return true
        }
        return false
    })
    
    const tableSearch = document.getElementsByTagName('tbody')[0]

    tableSearch.innerHTML = ""

    let tr = ""

    for(let data of filterDataTable) {
        const trString = `<tr>
        <td>${data.Name}</td> 
        <td>${data.LastName}</td>
        <td>${data.Country}</td>
        </tr>`;
        
        tr += trString;
    }
    tableSearch.innerHTML = tr;
});
