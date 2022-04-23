function App2() {
    const [students, setStudents] = useState([])
    const [filteredStudents, setFilteredStudents] = useState([])
    const [search, setSearch] = useState("")
    
   
   // Get request and store response in the 'students' state //
   
    useEffect(()=>{
       axios.get('Link to the API')
       .then(res => {
         const result = res.data.students
         setStudents(result)
       })
     },[])
   
   // Filter students by name and store filtered result in 'filteredStudents' //
   
    useEffect(() => {
       const searchResult = []
   
       students.map(student => {
         const firstName = student.firstName.toLowerCase()
         const lastName = student.lastName.toLowerCase()
         const fullName = `${firstName}` + ` ${lastName}`
   
           if (fullName.includes(search.toLowerCase())) {
             searchResult.push(student)
           }
         return
       })
   
       setFilteredStudents(searchResult)
     }, [search])
   
   return (
    <div>
       <SearchBar
         search={search}
         onChange={e => setSearch(e.target.value)}
       />
   
   //Second search bar by tag here//
       
      {search.length == 0 &&
         //unfiltered students object here
      }
   
      {search.length != 0 &&
        <div>
           {filteredStudents.map(student => (
             <Profile
                //Some props here//
             />
           ))}   
        </div>
      }
    </div>
   )}
   
   
   