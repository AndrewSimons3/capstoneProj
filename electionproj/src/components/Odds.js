import React from 'react'
import Table from '@material-ui/core/Table'
import Logo from '../images/tb.jpg'
// import TableHead from '@material-ui/core/TableHead'
// import TableRow from '@material-ui/core/TableRow'
// import TableCell from '@material-ui/core/TableCell'
// import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
// import Grid from '@material-ui/core/Grid';

const Odds = (props) => {

  return(
    <div>
    <TableContainer>
      <Table>
       <div>
       <img src={Logo} />
       </div>
      </Table>
    </TableContainer>
    </div>
  )
  }

export default Odds;