import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";

import UserDataTable from "@/components/tables/user-data-table.jsx";

const UserPage = () => {
    return (
        <>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">Company</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                    <BreadcrumbPage>User</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
                </Breadcrumb>
            </div>
          </header>
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Users</h2>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>User List</CardTitle>
              </CardHeader>
              <CardContent>
                <UserDataTable />
              </CardContent>
          </Card>
          </div>
        </>
    )
};

export default UserPage; 