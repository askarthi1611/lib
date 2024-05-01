import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  $: any;
  mouseover() {
    if ($(".sidebar").hasClass('sidebar-close')) {
      $(".nav-links").width(250)
    }
  }
  mouseleave() {
    if ($(".sidebar").hasClass('sidebar-close')) {
      $(".nav-links").width(60)
    }
  }
  isAdmin: any = true;
  role: any = ''
  getCurrentUser() {
    console.log('sidebar session get');
    const currentUserString: any = sessionStorage.getItem('currentUser');
    let user = currentUserString ? JSON.parse(currentUserString) : null
    this.role = user.role
    return user;
  }





  openSidebar: any = true;
  // openSidebar: boolean = true;

  menuSidebar = [
    {
      link_name: "Admin Dashboard",
      link: "admin",
      type: 'admin',
      icon: "../assets/images/masters.png",
      sub_menu: []
    },
    {
      link_name: "User Dashboard",
      link: "userdashboard", type: 'user',

      icon: "../assets/images/folder_access.png",
      sub_menu: []
    },
    {
      link_name: "Borrow",
      link: "borrow", type: 'user',

      icon: "../assets/images/workflow.png",
      sub_menu: []
    },
    {
      link_name: "Transaction",
      link: "transaction", type: 'admin',

      icon: "../assets/images/status.png",
      sub_menu: []
    },
    {
      link_name: "User List",
      link: "user", type: 'admin',
      icon: "../assets/images/approval.png",
      sub_menu: []
    },
    {
      link_name: "Profile",
      link: "profile", type: 'admin',
      icon: "../assets/images/profile.png",
      sub_menu: []
    },
    {
      link_name: "Profile",
      link: "profile", type: 'user',
      icon: "../assets/images/profile.png",
      sub_menu: []
    },
    // {
    //   link_name: "Scan Document",
    //   link: "dms/scan",
    //   icon: "../assets/images/dashboard.png",
    //   sub_menu: []
    // },
    //  {
    //   link_name: "Approval",
    //   link: null,
    //   icon: "../assets/images/approval.png",
    //   sub_menu: []
    // }, {
    //   link_name: "Status",
    //   link: "status",
    //   icon: "../assets/images/status.png",
    //   sub_menu: []
    // }, {
    //   link_name: "Masters",
    //   link: null,
    //   icon: "../assets/images/masters.png",
    //   sub_menu: [
    //     {
    //       link_name: "User Management",
    //       link: null,
    //     }, {
    //       link_name: "Role Management",
    //       link: null,
    //     }, {
    //       link_name: "Account Type",
    //       link: null,
    //     },
    //     {
    //       link_name: "Designation",
    //       link: null,
    //     },
    //     {
    //       link_name: "Activity Type",
    //       link: null,
    //     },
    //   ]
    // },  {
    //   link_name: "Reports",
    //   link: null,
    //   icon: "../assets/images/reports.png",
    //   sub_menu: []
    // }
  ]
  ngOnInit() {

    this.getCurrentUser()

    function handleSidebar() {
      let windowWidth:any = $(window).width();
      if (windowWidth < 991) {
        $(".sidebar").addClass("sidebar-close");
        $("body").addClass("fullcontent");
      } else {
        $(".sidebar").removeClass("sidebar-close");
        $("body").removeClass("fullcontent");
      }
    }
  
    // Call the function on page load
    setTimeout(() => {
      handleSidebar();
    }, 200);
    $(window).on("resize", function () {
      let resize_width: any = $(window).width();
      if (resize_width < 991) {
        $(".sidebar").addClass("sidebar-close");
        $("body").addClass("fullcontent");
      } else {
        $(".sidebar").removeClass("sidebar-close");
        $("body").removeClass("fullcontent");
      }
    });
  }

  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle("showMenu");
  }



  changemaincon_short = () => {
    $(".headerbar_class").removeClass("headerbar_full");
    $(".headerbar_class").addClass("headerbar");

    $(".main-panel_class").removeClass("main-panel_full");
    $(".main-panel_class").addClass("main-panel");
  }



  changemaincon_full = () => {
    alert("TEST");
    $(".headerbar_class").removeClass("headerbar");
    $(".headerbar_class").addClass("headerbar_full");

    $(".main-panel_class").removeClass("main-panel");
    $(".main-panel_class").addClass("main-panel_full");
  }

}
