


export const Select = ({options = [], onSelect}) => {

   const handleSelect = (e) => {
      onSelect(e.target.value)
   }

   

   
   return(
        <select onChange={handleSelect} className="form-select form-select-sm mb-3">
           {
               options.map((opt) => <option key={opt} value={opt}>{opt}</option>)
           }
        </select>
   )
}
