// https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4
var rr_tbl = document.getElementById("table-dns-parameters-4");

var records = []
for (var record of rr_tbl.children[1].children) {  
    if (!["DEPRECATED", "EXPERIMENTAL", "OBSOLETE"].some(excluded_keyword => record.children[2].textContent.toUpperCase().includes(excluded_keyword))) {
        records.push({
            rtype: record.children[0].textContent,
            decimal_value: record.children[1].textContent,
            description: record.children[2].textContent,
            rfc_info: record.children[3].textContent.replaceAll("][", ", ").replaceAll('[', '').replaceAll(']', '').trim(),
            template: record.children[4].textContent.trim(),
            registration_date: record.children[5].textContent,
        });
    }
}
console.log(JSON.stringify(records, null, 4), records.length);
