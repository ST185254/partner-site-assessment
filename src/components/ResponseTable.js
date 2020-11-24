import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function ResponseTable(props) {
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead style={{backgroundColor:'#1875cc'}}>
          <TableRow>
            <TableCell>Question</TableCell>
            <TableCell>Response</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.responses.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.question}</TableCell>
              <TableCell>{row.response}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}