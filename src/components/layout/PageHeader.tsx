import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export interface BreadcrumbEntry {
  name: string;
  path: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbEntry[];
  children?: React.ReactNode;
}

const PageHeader = ({ title, subtitle, breadcrumbs, children }: PageHeaderProps) => (
  <section className="pt-32 pb-16 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl">
        {breadcrumbs && (
          <Breadcrumb className="mb-6">
            <BreadcrumbList className="text-gray-600">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <Fragment key={crumb.path}>
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage className="text-gray-800">{crumb.name}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link to={crumb.path} className="hover:text-primary">
                            {crumb.name}
                          </Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {!isLast && <BreadcrumbSeparator />}
                  </Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{title}</h1>
        <div className="h-1 w-20 bg-primary mb-6"></div>
        {subtitle && <p className="text-xl text-gray-700">{subtitle}</p>}
        {children}
      </div>
    </div>
  </section>
);

export default PageHeader;
