export default {
    "_last_updated": "Sun, 29 Oct 2017 02:08:48 +0000",
    "ID": "CF59f533d0a5e0b",
    "cf_version": "1.5.5",
    "name": "X8 Conditionals Hide create@1.5.5",
    "scroll_top": 0,
    "description": "\t\t\t\t\t\t\t",
    "success": "Form has been successfully submitted. Thank you.\t\t\t",
    "db_support": 1,
    "pinned": 0,
    "hide_form": 1,
    "check_honey": 1,
    "avatar_field": "",
    "form_ajax": 1,
    "custom_callback": "",
    "layout_grid": {
    "fields": {
        "fld_5216203": "1:1",
            "fld_1705245": "1:1",
            "fld_7100783": "2:1",
            "fld_313720": "3:1",
            "fld_8846716": "3:1",
            "fld_5619974": "4:1"
    },
    "structure": "12|12#12|12"
},
    "fields": {
    "fld_1705245": {
        "ID": "fld_1705245",
            "type": "number",
            "label": "Number",
            "slug": "number",
            "conditions": {
            "type": "con_3840644613791445"
        },
        "caption": "Hidden by dropdown",
            "config": {
            "custom_class": "",
                "placeholder": "",
                "default": "",
                "min": "",
                "max": "",
                "step": ""
        }
    },
    "fld_5216203": {
        "ID": "fld_5216203",
            "type": "dropdown",
            "label": "Dropdown",
            "slug": "dropdown",
            "conditions": {
            "type": "con_3156693554561454"
        },
        "caption": "Hidden if number is greater than 5 or number 2 is 10",
            "config": {
            "custom_class": "",
                "placeholder": "",
                "default_option": "",
                "auto_type": "",
                "taxonomy": "category",
                "post_type": "post",
                "value_field": "name",
                "orderby_tax": "count",
                "orderby_post": "ID",
                "order": "ASC",
                "default": "opt1326030",
                "option": {
                "opt1326030": {
                    "calc_value": "",
                        "value": "Hide Number",
                        "label": "Hide Number"
                },
                "opt1184564": {
                    "calc_value": "",
                        "value": "No",
                        "label": "No"
                }
            }
        }
    },
    "fld_8846716": {
        "ID": "fld_8846716",
            "type": "number",
            "label": "Number 2",
            "slug": "number_2",
            "conditions": {
            "type": "con_8761120514939434"
        },
        "caption": "Hide by either dropdwon",
            "config": {
            "custom_class": "",
                "placeholder": "",
                "default": "",
                "min": "",
                "max": "",
                "step": ""
        }
    },
    "fld_313720": {
        "ID": "fld_313720",
            "type": "dropdown",
            "label": "Dropdown 2",
            "slug": "dropdown_2",
            "conditions": {
            "type": "con_3156693554561454"
        },
        "caption": "",
            "config": {
            "custom_class": "",
                "placeholder": "",
                "default_option": "",
                "auto_type": "",
                "taxonomy": "category",
                "post_type": "post",
                "value_field": "name",
                "orderby_tax": "name",
                "orderby_post": "name",
                "order": "ASC",
                "default": "",
                "option": {
                "opt1326030": {
                    "calc_value": "Hide Number",
                        "value": "Hide Number",
                        "label": "Hide Number"
                },
                "opt1140372": {
                    "calc_value": "",
                        "value": "No",
                        "label": "No"
                }
            }
        }
    },
    "fld_7100783": {
        "ID": "fld_7100783",
            "type": "button",
            "label": "Next Page",
            "slug": "next_page",
            "conditions": {
            "type": ""
        },
        "caption": "",
            "config": {
            "custom_class": "",
                "type": "next",
                "class": "btn btn-default",
                "target": ""
        }
    },
    "fld_5619974": {
        "ID": "fld_5619974",
            "type": "button",
            "label": "Back",
            "slug": "back",
            "conditions": {
            "type": ""
        },
        "caption": "",
            "config": {
            "custom_class": "",
                "type": "prev",
                "class": "btn btn-default",
                "target": ""
        }
    }
},
    "page_names": [
    "Page 1",
    "Page 2"
],
    "mailer": {
    "on_insert": 1,
        "sender_name": "Caldera Forms Notification",
        "sender_email": "josh@calderawp.com",
        "reply_to": "",
        "email_type": "html",
        "recipients": "",
        "bcc_to": "",
        "email_subject": "Hide Test",
        "email_message": "{summary}"
},
    "conditional_groups": {
    "conditions": {
        "con_3840644613791445": {
            "id": "con_3840644613791445",
                "name": "Hide Number",
                "type": "hide",
                "fields": {
                "cl7544591620602851": "fld_5216203"
            },
            "group": {
                "rw2216294469904031": {
                    "cl7544591620602851": {
                        "parent": "rw2216294469904031",
                            "field": "fld_5216203",
                            "compare": "is",
                            "value": "opt1326030"
                    }
                }
            }
        },
        "con_3156693554561454": {
            "id": "con_3156693554561454",
                "name": "Hide Dropdown",
                "type": "hide",
                "fields": {
                "cl1059824988036823": "fld_1705245",
                    "cl181468538675662": "fld_8846716"
            },
            "group": {
                "rw7802324828821689": {
                    "cl1059824988036823": {
                        "parent": "rw7802324828821689",
                            "field": "fld_1705245",
                            "compare": "greater",
                            "value": "5"
                    }
                },
                "rw5464489746314226": {
                    "cl181468538675662": {
                        "parent": "rw5464489746314226",
                            "field": "fld_8846716",
                            "compare": "is",
                            "value": "10"
                    }
                }
            }
        },
        "con_8761120514939434": {
            "id": "con_8761120514939434",
                "name": "Hide Number 2",
                "type": "hide",
                "group": {
                "rw8614452180961339": {
                    "cl483565773895193": {
                        "parent": "rw8614452180961339",
                            "field": "fld_5216203",
                            "compare": "is",
                            "value": "opt1326030"
                    }
                },
                "rw4809818870119261": {
                    "cl9529641586904005": {
                        "parent": "rw4809818870119261",
                            "field": "fld_313720",
                            "compare": "is",
                            "value": "opt1326030"
                    }
                }
            },
            "fields": {
                "cl483565773895193": "fld_5216203",
                    "cl9529641586904005": "fld_313720"
            }
        }
    }
},
    "settings": {
    "responsive": {
        "break_point": "sm"
    }
},
    "version": "1.5.5",
    "db_id": "97",
    "type": "primary"
}