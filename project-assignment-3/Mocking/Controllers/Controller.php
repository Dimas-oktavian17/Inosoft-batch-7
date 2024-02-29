<?php

namespace Mocking\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;

class Controller extends BaseController
{
    public function getData()
    {
        $path = base_path() . "/Mocking/Json/get_all_data.json";

        if (File::exists($path)) {
            $json = json_decode(file_get_contents($path), true);
            return response()->json($json);
        } else {
            return response()->json(['error' => 'Data not found'], 404);
        }
    }
    public function postData(Request $request)
    {
        $path = base_path() . "/Mocking/Json/get_all_data.json";
        $json = json_decode(file_get_contents($path), true);

        // Assuming $request->username contains the new username
        $newItem = [
            'id' => count($json['data']) + 1,
            'name' => $request->username,
        ];

        $json['data'][] = $newItem;
        file_put_contents($path, json_encode($json));

        return response()->json(['message' => 'Data added successfully', 'data' => $newItem], 200);
    }

    // public function postData(Request $request)
    // {
    //     $path = base_path() . "/Mocking/Json/success_post.json";
    //     $json = json_decode(file_get_contents($path), true);

    //     // Assuming $request->all() contains the new data to be added
    //     $newData = $request->all();
    //     $newData['id'] = count($json['data']) + 1; // Assuming the ID is unique

    //     $json['data'][] = $newData;
    //     file_put_contents($path, json_encode($json));

    //     return response()->json(['message' => 'Data added successfully', 'data' => $newData], 200);
    // }


    public function putData(Request $request)
    {
        $path = base_path() . "/Mocking/Json/success_put.json";
        $json = json_decode(file_get_contents($path), true);
        // Assuming $request->id contains the ID of the item to be updated
        foreach ($json['data'] as &$item) {
            if ($item['id'] == $request->id) {
                $item = array_merge($item, $request->all());
                break;
            }
        }
        file_put_contents($path, json_encode($json));

        return response()->json(['message' => 'Data updated successfully']);
    }

    public function patchData(Request $request)
    {
        $path = base_path() . "/Mocking/Json/success_patch.json";
        $json = json_decode(file_get_contents($path), true);
        // Assuming $request->id contains the ID of the item to be updated
        foreach ($json['data'] as &$item) {
            if ($item['id'] == $request->id) {
                $item = array_merge($item, $request->all());
                break;
            }
        }
        file_put_contents($path, json_encode($json));

        return response()->json(['message' => 'Data patched successfully']);
    }
}
