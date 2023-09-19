import './browse.css'
const BrowseByStyle = () => {
    return (
        <div className="browseByStyle md:mt-0 mt-32 leftPadding rightPadding pb-14">
            <div className="browseByStyleWrapper flex  items-center flex-col gap-8  justify-center p-8 ">
                <span className="browseByStyle_span">BROWSE BY DRESS STYLE</span>
                <div className='flex flex-col flex-wrap items-center justify-center gap-8'>
                    <div className='flex flex-wrap items-center justify-center gap-4'>
                        <img className='rounded-xl' src="/images/styles/image 11.png" alt="" />
                        <img className='rounded-xl' src="/images/styles/image 13.png" alt="" />
                    </div>
                    <div className='flex flex-wrap items-center justify-center gap-4'>
                        <img className='rounded-xl' src="/images/styles/image 12.png" alt="" />
                        <img className='rounded-xl' src="/images/styles/image 14.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default BrowseByStyle