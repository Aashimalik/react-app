import React from 'react';
import {Label} from 'react-bootstrap';

export const statusLabel=(status)=> <Label bsStyle={status ? 'primary':'danger'}>{status ? 'Active':'Inactive'}</Label>


