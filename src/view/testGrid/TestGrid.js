import React from "react";
// componetes
import { DataTeachers } from "../../data/dataGrid";
import { TempGridItem } from "./tempGridItem";
// Grid Components
import '../../components/sidebar/style.css';

import { Header } from "./header";
import { GridHeader } from "./GridHeader";
import { GridSearchBar } from "./GridSearchBar";
import { Grid } from "../../components/Grid";
import { GridItemsHeader } from "./GridItemsHeader";
import { GridFooter } from "./GridFooter";
import { Sidebar } from "../../components/sidebar/Sidebar";

const TestGridView = () => {

  const cantPaginas = 10;
  const NameGridTable = "Teachers";
  const GridItemHeader1 = "Email";
  const GridItemHeader2 = "Location";
  const GridItemHeader3 = "Phone";

  return (
    <>
      <div className="home-section bg-gray2">
        {
          // Barra lateral
          <Sidebar />
        }
        <div>
            {
              // nav
              <Header />
            }
          <Grid $grid_primary_container>
            <GridHeader NameGridTable={NameGridTable} />

            <Grid $grid_items_container>
              <GridSearchBar />

              <GridItemsHeader
                GridItemHeader1={GridItemHeader1}
                GridItemHeader3={GridItemHeader3}
                GridItemHeader2={GridItemHeader2}
              />
              {DataTeachers.map((teacher) => (
                <TempGridItem key={teacher.id} {...teacher} />
              ))}

              <hr />

              <GridFooter cantPaginas={cantPaginas} />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default TestGridView;
