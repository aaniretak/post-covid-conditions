// add your JavaScript/D3 to this file
var data1_p6 = [
        [{ grouping: 'Other', value: 87.4 },
        { grouping: 'White', value: 79.3 },
        { grouping: 'Hispanic', value: 80.1 },
        { grouping: 'Black', value: 79.1 },
        { grouping: 'Asian', value: 72.1 }],
        [{ grouping: 'Other', value: 8.4 },
        { grouping: 'White', value: 5.8 },
        { grouping: 'Hispanic', value: 6.2 },
        { grouping: 'Black', value: 4.1 },
        { grouping: 'Asian', value: 2.6 }],
        [{ grouping: 'Other', value: 31.9 },
        { grouping: 'White', value: 22.3 },
        { grouping: 'Hispanic', value: 31.6 },
        { grouping: 'Black', value: 24.9 },
        { grouping: 'Asian', value: null }],
        [{ grouping: 'Other', value: 3.1 },
        { grouping: 'White', value: 1.6 },
        { grouping: 'Hispanic', value: 2.5 },
        { grouping: 'Black', value: 1.3 },
        { grouping: 'Asian', value: 0.5 }]
    ];
var data1_p7 = [
        [{ grouping: 'Other', value: 83.4 },
        { grouping: 'White', value: 78.3 },
        { grouping: 'Hispanic', value: 81.5 },
        { grouping: 'Black', value: 81.5 },
        { grouping: 'Asian', value: 76.1 }],
        [{ grouping: 'Other', value: 6.7 },
        { grouping: 'White', value: 4.9 },
        { grouping: 'Hispanic', value: 5.3 },
        { grouping: 'Black', value: 3.7 },
        { grouping: 'Asian', value: 3.4 }],
        [{ grouping: 'Other', value: 32.7 },
        { grouping: 'White', value: 23.5 },
        { grouping: 'Hispanic', value: 29 },
        { grouping: 'Black', value: 31.4 },
        { grouping: 'Asian', value: 14.6 }],
        [{ grouping: 'Other', value: 2.6 },
        { grouping: 'White', value: 1.5 },
        { grouping: 'Hispanic', value: 1.9 },
        { grouping: 'Black', value: 1.5 },
        { grouping: 'Asian', value: 0.9 }]
    ];

    var data1_p8 = [
        [{ grouping: 'Other', value: 83.8 },
        { grouping: 'White', value: 79.5 },
        { grouping: 'Hispanic', value: 80.9 },
        { grouping: 'Black', value: 83.6 },
        { grouping: 'Asian', value: 84.5 }],
        [{ grouping: 'Other', value: 6.8 },
        { grouping: 'White', value: 5.1},
        { grouping: 'Hispanic', value: 5 },
        { grouping: 'Black', value: 3.9 },
        { grouping: 'Asian', value: 2.6 }],
        [{ grouping: 'Other', value: 27.8 },
        { grouping: 'White', value: 23.9 },
        { grouping: 'Hispanic', value: 30.3 },
        { grouping: 'Black', value: 22.6 },
        { grouping: 'Asian', value: 20.8 }],
        [{ grouping: 'Other', value: 2.3 },
        { grouping: 'White', value: 1.5 },
        { grouping: 'Hispanic', value: 1.8 },
        { grouping: 'Black', value: 1.0 },
        { grouping: 'Asian', value: 0.6 }]
    ];

    var data1_p9 = [
        [{ grouping: 'Other', value: 86.2 },
        { grouping: 'White', value: 80.2 },
        { grouping: 'Hispanic', value: 78.4 },
        { grouping: 'Black', value: 82.1 },
        { grouping: 'Asian', value: 83 }],
        [{ grouping: 'Other', value: 8.7 },
        { grouping: 'White', value: 5.0 },
        { grouping: 'Hispanic', value: 5.0 },
        { grouping: 'Black', value: 3.8 },
        { grouping: 'Asian', value: 2.2 }],
        [{ grouping: 'Other', value: 35.4 },
        { grouping: 'White', value: 23.7 },
        { grouping: 'Hispanic', value: 29.7 },
        { grouping: 'Black', value: 25.2 },
        { grouping: 'Asian', value: null }],
        [{ grouping: 'Other', value: 3.5 },
        { grouping: 'White', value: 1.5 },
        { grouping: 'Hispanic', value: 1.9 },
        { grouping: 'Black', value: 1.2 },
        { grouping: 'Asian', value: 0.5 }]
    ];

    var data1_p10 = [
        [{ grouping: 'Other', value: 83.8 },
        { grouping: 'White', value: 81.1 },
        { grouping: 'Hispanic', value: 84.4 },
        { grouping: 'Black', value: 75.5 },
        { grouping: 'Asian', value: 79.1 }],
        [{ grouping: 'Other', value: 7.4 },
        { grouping: 'White', value: 4.8 },
        { grouping: 'Hispanic', value: 4.4 },
        { grouping: 'Black', value: 3.1 },
        { grouping: 'Asian', value: 2.2 }],
        [{ grouping: 'Other', value: 23.15 },
        { grouping: 'White', value: 23.05 },
        { grouping: 'Hispanic', value: 26.5 },
        { grouping: 'Black', value: 24.95 },
        { grouping: 'Asian', value: null }],
        [{ grouping: 'Other', value: 2.1 },
        { grouping: 'White', value: 1.4 },
        { grouping: 'Hispanic', value: 1.4 },
        { grouping: 'Black', value: 1.0 },
        { grouping: 'Asian', value: 0.7 }]
        ];

    var data2_p6 = [
        [{ grouping: 'Cis-female', value: 79.1 },
        { grouping: 'Cis-male', value: 80 }],
        [{ grouping: 'Cis-female', value: 6.9 },
        { grouping: 'Cis-male', value: 4.0 },
        { grouping: 'Transgender', value: 12.9 }],
        [{ grouping: 'Cis-female', value: 24.1 },
        { grouping: 'Cis-male', value: 23.0 }],
        [{ grouping: 'Cis-female', value: 2.1 },
        { grouping: 'Cis-male', value: 1.17 },
        { grouping: 'Transgender', value: 11.1 }]
    ];

    var data2_p7 = [
        [{ grouping: 'Cis-female', value: 78.5 },
        { grouping: 'Cis-male', value: 81.2 }],
        [{ grouping: 'Cis-female', value: 6.0 },
        { grouping: 'Cis-male', value: 3.4 },
        { grouping: 'Transgender', value: 12.0 }],
        [{ grouping: 'Cis-female', value: 24.7 },
        { grouping: 'Cis-male', value: 25.2 }],
        [{ grouping: 'Cis-female', value: 1.93 },
        { grouping: 'Cis-male', value: 1.07 },
        { grouping: 'Transgender', value: 1.5 }]
    ];

    var data2_p8 = [
        [{ grouping: 'Cis-female', value: 79.4 },
        { grouping: 'Cis-male', value: 81.1 }],
        [{ grouping: 'Cis-female', value: 6.1 },
        { grouping: 'Cis-male', value: 3.5 },
        { grouping: 'Transgender', value: 10.8 }],
        [{ grouping: 'Cis-female', value: 24.3 },
        { grouping: 'Cis-male', value: 24.2 }],
        [{ grouping: 'Cis-female', value: 1.87 },
        { grouping: 'Cis-male', value: 1.03 },
        { grouping: 'Transgender', value: 2 }]
    ];

     var data2_p9 = [
        [{ grouping: 'Cis-female', value: 80.1 },
        { grouping: 'Cis-male', value: 79.8 }],
        [{ grouping: 'Cis-female', value: 5.9 },
        { grouping: 'Cis-male', value: 3.6 },
        { grouping: 'Transgender', value: 15.7 }],
        [{ grouping: 'Cis-female', value: 25.2 },
        { grouping: 'Cis-male', value: 23.7 }],
        [{ grouping: 'Cis-female', value: 1.83 },
        { grouping: 'Cis-male', value: 1.1 },
        { grouping: 'Transgender', value: 8.6 }]
    ];

    var data2_p10 = [
        [{ grouping: 'Cis-female', value: 81.2 },
        { grouping: 'Cis-male', value: 80.2 }],
        [{ grouping: 'Cis-female', value: 5.6 },
        { grouping: 'Cis-male', value: 3.2 },
        { grouping: 'Transgender', value: 12.4 }],
        [{ grouping: 'Cis-female', value: 23.1 },
        { grouping: 'Cis-male', value: 23.55 }],
        [{ grouping: 'Cis-female', value: 1.55 },
        { grouping: 'Cis-male', value: 0.95 },
        { grouping: 'Transgender', value: 4.5 }]
    ];

    var data3_p6 = [
        [{ grouping: 'With disability', value: 89.9 },
        { grouping: 'Without disability', value: 74.3 }],
        [{ grouping: 'With disability', value: 12.9 },
        { grouping: 'Without disability', value: 4.4 }],
        [{ grouping: 'With disability', value: 40.0 },
        { grouping: 'Without disability', value: 16.4 }],
        [{ grouping: 'With disability', value: 5.8 },
        { grouping: 'Without disability', value: 1.0 }]
    ];

    var data3_p7 = [
        [{ grouping: 'With disability', value: 89.7 },
        { grouping: 'Without disability', value: 75.2 }],
        [{ grouping: 'With disability', value: 11.73 },
        { grouping: 'Without disability', value: 3.73 }],
        [{ grouping: 'With disability', value: 44.5 },
        { grouping: 'Without disability', value: 16.1 }],
        [{ grouping: 'With disability', value: 5.8 },
        { grouping: 'Without disability', value: 0.8 }]
    ];

    var data3_p8 = [
        [{ grouping: 'With disability', value: 91 },
        { grouping: 'Without disability', value: 75.1 }],
        [{ grouping: 'With disability', value: 11.33 },
        { grouping: 'Without disability', value: 3.9 }],
        [{ grouping: 'With disability', value: 43.4 },
        { grouping: 'Without disability', value: 14.7 }],
        [{ grouping: 'With disability', value: 5.4 },
        { grouping: 'Without disability', value: 0.7 }]
    ];

    var data3_p9 = [
        [{ grouping: 'With disability', value: 90 },
        { grouping: 'Without disability', value: 75.2 }],
        [{ grouping: 'With disability', value: 11.93 },
        { grouping: 'Without disability', value: 3.7 }],
        [{ grouping: 'With disability', value: 44.6 },
        { grouping: 'Without disability', value: 15.0 }],
        [{ grouping: 'With disability', value: 5.9 },
        { grouping: 'Without disability', value: 0.7 }]
    ];

    var data3_p10 = [
        [{ grouping: 'With disability', value: 92.1 },
        { grouping: 'Without disability', value: 76.2 }],
        [{ grouping: 'With disability', value: 11.4 },
        { grouping: 'Without disability', value: 3.55 }],
        [{ grouping: 'With disability', value: 40.6 },
        { grouping: 'Without disability', value: 16.1 }],
        [{ grouping: 'With disability', value: 5.1 },
        { grouping: 'Without disability', value: 0.8 }]
    ];

    // Set up the dimensions for each plot
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const plotWidth = 300;
    const plotHeight = 300;

    // Create an SVG container for the row
    const svgRow = d3.select("div#plot")
        .append("svg")
        .attr("width", (plotWidth + margin.left + margin.right) * 3 + 200)
        .attr("height", plotHeight + margin.top + margin.bottom + 20)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Create an SVG container for the first plot
    const svg1 = createDotPlot(data1_p6, 0, "Race/ Ethnicity");

    // Create an SVG container for the second plot
    const svg2 = createDotPlot(data2_p6, plotWidth + 100,"Gender Identity");

    // Create an SVG container for the third plot
    const svg3 = createDotPlot(data3_p6, (plotWidth + 100) * 2,"Disability Status");

    function createDotPlot(inp_data, xOffset,input_title) {

        d3.selectAll("g")
          .filter(function () {
              return this.getAttribute("transform") === "translate(" + xOffset + ", 0)";
          })
          .remove();

        const svg = svgRow.append("g")
            .attr("transform", "translate(" + xOffset + ", 0)");

        //Title
        svg.append("text")
            .attr("class", "title")
            .attr("x", plotWidth / 2)
            .attr("y", 0)
            .attr("text-anchor", "middle")
            .text(input_title);

        // Create scales
        const xScale = d3.scaleLinear()
            .domain([0, 100])
            .range([0, plotWidth]);

        const yScale = d3.scaleBand()
            .domain(inp_data[1].map(d => d.grouping))
            .range([0, plotHeight])
            .padding(0.1);

        // Draw lines
       svg.selectAll(".line")
            .data(inp_data[1])
            .enter()
            .append("line")
            .attr("class", "line")
            .attr("x1", 0)
            .attr("y1", d => yScale(d.grouping) + yScale.bandwidth() / 2)
            .attr("x2", plotWidth)
            .attr("y2", d => yScale(d.grouping) + yScale.bandwidth() / 2)
            .attr("stroke", "grey")
            .attr("stroke-width", 1);

        // Draw dots
        svg.selectAll(".dots-ah")
            .data(inp_data[0])
            .enter()
            .append("circle")
            .attr("class", "dots-ah")
            .attr("cx", d => xScale(d.value))
            .attr("cy", d => yScale(d.grouping) + yScale.bandwidth() / 2)
            .attr("r", 4)
            .attr("fill", "#0017FF");

        svg.selectAll(".dots-aa")
            .data(inp_data[1])
            .enter()
            .append("circle")
            .attr("class", "dots-aa")
            .attr("cx", d => xScale(d.value))
            .attr("cy", d => yScale(d.grouping) + yScale.bandwidth() / 2)
            .attr("r", 4)
            .attr("fill", "#FF9900");

        svg.selectAll(".dots-sh")
            .data(inp_data[2])
            .enter()
            .append("circle")
            .attr("class", "dots-sh")
            .attr("cx", d => xScale(d.value))
            .attr("cy", d => yScale(d.grouping) + yScale.bandwidth() / 2)
            .attr("r", 4)
            .attr("fill", "#00FF19");

        svg.selectAll(".dots-sa")
            .data(inp_data[3])
            .enter()
            .append("circle")
            .attr("class", "dots-sa")
            .attr("cx", d => xScale(d.value))
            .attr("cy", d => yScale(d.grouping) + yScale.bandwidth() / 2)
            .attr("r", 4)
            .attr("fill", "#FF00E6");

        // Draw axes
        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        svg.append("g")
            .attr("class", "x-axis")
            .attr("transform", "translate(0," + plotHeight + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y-axis")
            .call(yAxis);


        return svg;
    }

    // Create legend
    var legend = d3.select('svg')
        .append('g')
        .attr('class', 'legend');

    const legendColors = ['#FF00E6', '#FF9900', '#00FF19', '#0017FF'];
    const legendText = ['Significant limitations/all adults', 'Any limitations/all adults', 'Significant limitations/adults with COVID', 'Any limitations/adults with COVID'];
    const legendCircleSize = 6;

    legend.selectAll('.legend-dots')
        .data(legendColors)
        .enter()
        .append('circle')
        .attr('cx', (d,i) => (300*i) + 30)
        .attr('cy', 360)
        .attr('r', legendCircleSize)
        .style('fill', d => d);

    legend.selectAll('text')
        .data(legendText)
        .enter()
        .append('text')
        .attr('x', (d,i) => (300*i) + 45)
        .attr('y', (d, i) => 360)
        .attr('dy', '0.35em')
        .text(d => d);

    // Create buttons container
    var buttonContainer = d3.select('div#plot')
        .append('div')
        .attr('class', 'button-container');

      function buttonUpdate(phase) {
            switch (phase) {
                case "Phase 3.6":
                    createDotPlot(data1_p6, 0, "Race/ Ethnicity");
                    createDotPlot(data2_p6, plotWidth + 100, "Gender Identity");
                    createDotPlot(data3_p6, (plotWidth + 100) * 2,"Disability Status");
                    break;
                case "Phase 3.7":
                    createDotPlot(data1_p7, 0, "Race/ Ethnicity");
                    createDotPlot(data2_p7, plotWidth + 100, "Gender Identity");
                    createDotPlot(data3_p7, (plotWidth + 100) * 2,"Disability Status");
                    break;
                case "Phase 3.8":
                    createDotPlot(data1_p8, 0, "Race/ Ethnicity");
                    createDotPlot(data2_p8, plotWidth + 100, "Gender Identity");
                    createDotPlot(data3_p8, (plotWidth + 100) * 2,"Disability Status");
                    break;
                case "Phase 3.9":
                    createDotPlot(data1_p9, 0, "Race/ Ethnicity");
                    createDotPlot(data2_p9, plotWidth + 100, "Gender Identity");
                    createDotPlot(data3_p9, (plotWidth + 100) * 2,"Disability Status");
                    break;
                case "Phase 3.10":
                    createDotPlot(data1_p10, 0, "Race/ Ethnicity");
                    createDotPlot(data2_p10, plotWidth + 100, "Gender Identity");
                    createDotPlot(data3_p10, (plotWidth + 100) * 2,"Disability Status");
                    break;
                default:
                    break;
            }

            // Update the selected class for buttons
            d3.selectAll('.button').classed('selected', false);
            d3.select(this).classed('selected', true);
        };
