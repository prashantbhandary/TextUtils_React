import React from 'react'

export default function Alert(props) {
  return (
      props.alert && <>
      <div class="relative">
    {/* <!-- Hidden checkbox to control the alert visibility --> */}
    <input type="checkbox" id="alert-toggle" class="hidden"/>

    {/* <!-- Alert Box --> */}
    <div class="alert bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
        <strong class="font-bold">{props.alert.type}!</strong>
        <span class="block sm:inline">{props.alert.msg}</span>

    </div>
</div>


      </>

    
  )
}
