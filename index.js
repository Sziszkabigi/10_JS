function get_software_name(software_id)
{
    if (software_id == "PP")
        return "PortraitPro";
    else if (software_id == "PPB")
        return "PortraitPro Body";
    else if (software_id == "SPE")
        return "LandscapePro";
    else if (software_id == "LP")
        return "Smart Photo Editor";
    else if (software_id == "FP")
      return "FoodscapePro";
}

function is_internal_release(version)
{
  if (version.length == 7)
     return "[Internal]"
  else
    return " "
}

function generate_software_description(software_id, edition_id, version)
{
  var software_name = get_software_name(software_id);
  var internal_release = is_internal_release(version)

    if (edition_id == "Std")
        var edition_name = "Standard";
    else if (edition_id == "StdTrial")
        var edition_name = "Trial";
    else if (edition_id == "Studio")
        var edition_name = "Studio";
    return(`${software_name} (${edition_name} Edition) v${version} ${internal_release} `);
}

document.getElementById('output').innerHTML = generate_software_description("PPB", "Std", "2.3.0.3");

//   ------VERSION 2------//

const version_1 = ["2.3.3", "2.3.0.3"];

function get_internal_release(version_1)
{version_1.class
 if (version_1[1] == version_1.toString)
     return "[Internal]"
else (version_1[0] == version_1.toString)
     return "[Not Internal]"
}

function generate_software_description1(software_id, edition_id, version_1)
{
  var software_name = get_software_name(software_id);

  var internal_release_1 = get_internal_release(version_1);

    if (edition_id == "Std")
        var edition_name = "Standard";

    else if (edition_id == "StdTrial")
        var edition_name = "Trial";

    else if (edition_id == "Studio")
        var edition_name = "Studio";

    return(`${software_name} (${edition_name} Edition) v${version_1} ${internal_release_1} `);
}

document.getElementById('output_1').innerHTML = generate_software_description1("PPB", "Std", "2.3.3");

//   ------VERSION 3------//


function get_internal_release2(version_2)
{
 if (version_2 = true && "2.3.0.3")
     return "[Internal]";
  else
    return " Not";
}

function generate_software_description2(software_id, edition_id, version_2)
{
  var software_name = get_software_name(software_id);

  var internal_release_2 = get_internal_release2(version_2);

    if (edition_id == "Std")
        var edition_name = "Standard";

    else if (edition_id == "StdTrial")
        var edition_name = "Trial";

    else if (edition_id == "Studio")
        var edition_name = "Studio";

    return(`${software_name} (${edition_name} Edition) v${version_2} ${internal_release_2} `);
}

document.getElementById('output_2').innerHTML = generate_software_description2("PPB", "Std", "2.3.0.3");

