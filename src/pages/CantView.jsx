import React from 'react'
import { FaChevronDown, FaLock } from 'react-icons/fa'

const CantView = () => {
    const error = "Quiz hub.ng is in it's development stage and isn't hosted on a backend yet. Hence when you reload some pages, you might notice little side effects such as a Full Refresh of the page content. This is not a big problem as the team behind Quiz hub.ng is working to resolve this issue. Thanks for your patience"
  return (
    <div className={"cant-view page"}>
        <div className="content">
            <div className="heading">
                <div className="error">401</div>
                <h4>You can't view this Page <FaLock /></h4>
            </div>
            <div className="error-info">
                <div className="head">
                    <p>
                        Why did this happen ? 
                    </p>
                    <button>More <FaChevronDown /> </button>
                </div>
                <div className="holder">
                    <p>
                        {error}
                    </p>
                </div>
            </div>
            <div className="action">
                <div className="controls">
                    <button>Return to Home</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CantView