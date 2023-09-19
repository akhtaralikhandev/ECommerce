import './index.css'
const StayUptoDate = () => {
    return (
        <div className="stay_upto_date leftPadding rightPadding">
            <div className="stay_utpo_date_wrapper">
                <div className='stay_upto_date gap-2 md:flex flex-col'>
                    <span>STAY UPTO DATE ABOUT </span>
                    <span>OUR LATEST OFFERS</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <input className='subscribe_input outline-none' type="text" />
                    <button className='subscribe_to'>Subscribe to Newsletter</button>
                </div>
            </div>
        </div >
    )
}
export default StayUptoDate