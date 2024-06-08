import React from "react"
import Contact from "./contact"
import About from "./About"
import Services from "./services"
import '../assets/globals.css'
import Categories from "./categories"

const Dashboard = () => {
    return <>
        <div className="container-fluid">
        <div class = "row">
            <div className="col-md-6">
            <div className="image-container">
              <img src="assets/LandingImage.webp" alt="Your Image" className="img-fluid" />
            </div>
            </div>
            <div className="col-md-6">
                <div className="text-container">
                <div data-ux="Block" class="x-el x-el-div c1-1 c1-2 c1-4 c1-7m c1-b c1-c c1-d c1-e c1-f c1-g"><div data-ux="VerticalBox" class="x-el x-el-div x-el c1-1 c1-2 c1-7m c1-3v c1-t c1-48 c1-e1 c1-u c1-6g c1-e2 c1-bt c1-b c1-c c1-e3 c1-d c1-67 c1-68 c1-69 c1-6a c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"><div data-ux="Group" class="x-el x-el-div c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"><h6 data-ux="Details" data-aid="SECONDARY_TITLE_RENDERED" data-typography="DetailsAlpha" class="pb-2 x-el x-el-h6 c1-1 c1-2 c1-2e c1-2f c1-6k c1-22 c1-6w c1-6g c1-b c1-7z c1-33 c1-7j c1-37 c1-38 c1-39 c1-3a">Hello</h6><h2 role="heading" aria-level="2" data-ux="HeadingMajor" data-aid="SECTION_TITLE_RENDERED" data-typography="HeadingEpsilon" class="pb-2 x-el x-el-h2 c1-3f c1-2 c1-2e c1-2f c1-cd c1-25 c1-23 c1-22 c1-24 c1-6g c1-4p c1-29 c1-4q c1-2a c1-32 c1-7z c1-3h c1-3i c1-26 c1-3j c1-e4 c1-e5 c1-dr c1-e6 c1-dq c1-3k c1-3l c1-3m c1-3n c1-3o c1-3p c1-3q">Welcome to Bajrang Computer</h2><div data-ux="HorizontalBox" class="x-el x-el-div x-el c1-1 c1-2 c1-8u c1-4 c1-t c1-w c1-e1 c1-e7 c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"><div data-ux="Text" data-aid="DESCRIPTION_TEXT" data-typography="BodyBeta" class="x-el c1-1 c1-2 c1-2e c1-2f c1-6k c1-22 c1-24 c1-3c c1-b c1-7z c1-e8 c1-7j c1-e9 c1-ea c1-eb c1-ec x-rt"><p className="p-0"><span>Experience hassle-free computer services with Bajrang Computer. Get expert advice, repairs, and maintenance for your devices. Contact us today!</span></p></div></div><div data-ux="Block" class="x-el x-el-div c1-1 c1-2 c1-ed c1-b c1-c c1-d c1-e c1-f c1-g"><a data-ux-btn="secondary" customborderwidth="small" data-ux="ButtonSecondary" color="HIGHCONTRAST" data-aid="CTA_BUTTON_RENDERED" href="/" target="" data-tccl="ux2.INTRODUCTION.introduction1.Group.Default.Button.Secondary.422370.click,click" data-page="8c9d74f8-4a45-4c35-9e68-063d68757102" data-typography="ButtonAlpha" class="x-el x-el-a c1-3f c1-2 c1-av c1-aw c1-ax c1-2g c1-71 c1-ay c1-20 c1-2z c1-2y c1-2d c1-2f c1-2e c1-q c1-3c c1-4 c1-91 c1-92 c1-6x c1-6y c1-az c1-b0 c1-1u c1-7z c1-b1 c1-b2 c1-b3 c1-b4 c1-b5 c1-32 c1-3i c1-11 c1-33 c1-ee c1-ef c1-eg c1-b9 c1-ba c1-37 c1-38 c1-39 c1-3a">Find out more</a></div></div></div></div>
                </div>
            </div>
        </div>
        </div>
        <About/>
        <Services/>
        <Categories/>
        <Contact/>
    </>
}

export default Dashboard