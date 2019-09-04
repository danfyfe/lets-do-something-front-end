import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AddInviteForm from '../components/forms/AddInviteForm.js'

const AddInvitesContainer = props => {

  const [ adding, setAdding ] = useState(false)

  return(<>
    <div className='d-flex justify-content-between'>
      <span className='font-weight-bold small-font'>Invites</span>
      <FontAwesomeIcon className='' icon='plus' onClick={()=>setAdding(true)}/>
    </div>

    {adding ? <div>
      <AddInviteForm/>
    </div> : null}

    <div>
      <span className='small-font text-muted'>Pending</span>

    </div>

  </>)
}

export default AddInvitesContainer