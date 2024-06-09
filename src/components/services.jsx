import React from "react";
import DocumentTitle from "../changeTitle";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

function Services() {
    DocumentTitle("Services || Bajrang Computers")
    const { state, setState } = useContext(MyContext);
    return <>
    <div className="container-fluid p-0 mt-5">
        <div class="row mb-2 mt-2">
            <div class="col-sm-6">
                <div class="card bg-dark text-white">
                    <div class="card-body">
                        <h5 class="card-title">Computer Repair Services</h5>
                        <p class="card-text">
                        We offer a wide range of computer repair services, including hardware and software repairs, virus removal, and data recovery. Our team of experts is trained to solve any problem that your computer might be facing.
                        </p>
                        
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card bg-secondary text-white">
                    <div class="card-body">
                        <h5 class="card-title">Remote Support</h5>
                        <p class="card-text">
                        Our remote support service allows us to quickly diagnose and fix problems with your computer without you having to leave your home or office. Our experienced technicians will guide you through the process and get your computer running smoothly again in no time.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-2">
            <div class="col-sm-6">
                <div class="card bg-warning text-white">
                    <div class="card-body">
                        <h5 class="card-title">Computer Sales</h5>
                        <p class="card-text">
                        We offer a wide range of new and refurbished computers at competitive prices. Whether you're looking for a desktop or laptop, we can help you find the perfect computer to meet your needs and budget.                        </p>
                        
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card bg-primary text-white">
                    <div class="card-body">
                        <h5 class="card-title">Data Backup And Recovery</h5>
                        <p class="card-text">
                        We understand how important your data is to you, which is why we offer reliable data backup and recovery services. Our team of experts will help you protect your data and recover it in case of any unexpected loss.                        
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-2">
            <div class="col-sm-6">
                <div class="card bg-secondary text-white">
                    <div class="card-body">
                        <h5 class="card-title">Networking Solutions</h5>
                        <p class="card-text">
                        We can help you set up and maintain a secure and reliable network for your home or office. Our team of experts will work with you to design and implement a network that meets your specific needs.                        </p>
                        
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card bg-info text-white">
                    <div class="card-body">
                        <h5 class="card-title">Software Installation</h5>
                        <p class="card-text">
                        We offer software installation services for a wide range of applications, including productivity software, antivirus software, and more. Our team of experts will ensure that your software is installed correctly and is running smoothly.                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
}
export default Services