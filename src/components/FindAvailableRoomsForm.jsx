import { useState } from "react";
import { useNavigate } from "react-router";

function FindAvailableRoomsForm() {
    const nav = useNavigate();
  
    return (
    <div className="find-form-container">
        <form className="new-entry-form" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="">
            Start:
        </label>
        <input
            type="date"
            id="start"
            required
        />
        <label className="form-label" htmlFor="">
            End:
        </label>
        <input
            type="date"
            id="end"
            required
        />
        <label className="form-label" htmlFor="">
            Floor:
        </label>
        <input type="number" />
        <label className="form-label" htmlFor="">
            Capacity:
        </label>
        <input type="number" />
        
        <br />
        <input className="form-submit" type="submit" value="Submit" />
        </form>
    </div>
    );

}

export default FindAvailableRoomsForm;